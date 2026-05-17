import poemCreationModel from "../Poem/poem.model.js";
import userModel from "../User/user.model.js";
import sotryModel from "./story.model.js";
import creationModel from "./story.model.js";
import { storyPrompt } from "./story.prompt.js";
import { generateContent, generateTitle } from "./story.service.js";


export const createNewContent = async (req, res) => {
    try {
        const { format, mood, genre, userPrompt } = req.body
        if (!format || !mood || !genre || !userPrompt) {
            return res.status(400).json({
                success: false,
                message: 'Missing required parameters. Format, mood, genre, and prompt are mandatory.',
            });
        }
        const user = req.user
        if (user.generationCredits <= 0) {
            return res.status(403).json({
                success: false,
                message: 'You have exhausted your generation credits. Please upgrade to Premium or wait for your monthly refresh.',
            });
        }
        const response = await generateContent({
            format, mood, genre, userPrompt
        })
        const title = await generateTitle({
            format, mood, genre, userPrompt
        })
        let creation;
        if (String(format).toLowerCase() === 'story') {
            creation = await sotryModel.create({
                userId: user.id,
                title: title,
                format: "story",
                mood: mood,
                genre: genre,
                userPrompt: userPrompt,
                generatedText: response
            })
            if (!creation) {
                return res.status(400).json({
                    message: "Creation failed due to an error",
                    success: false
                })
            }
            const userId = user._id
            await userModel.findByIdAndUpdate(userId, {
                $inc: { generationCredits: -2 }
            })
            await userModel.findByIdAndUpdate(userId, {
                $inc: { totalStoriesWritten: +1 }
            })

        }
        else {
            creation = await poemCreationModel.create({
                userId: user.id,
                title: title,
                format: "poetry",
                mood: mood,
                genre: genre,
                userPrompt: userPrompt,
                generatedText: response
            })
            if (!creation) {
                return res.status(400).json({
                    message: "Creation failed due to an error",
                    success: false
                })
            }
            const userId = user._id
            await userModel.findByIdAndUpdate(userId, {
                $inc: { generationCredits: -5 }
            })
            await userModel.findByIdAndUpdate(userId, {
                $inc: { totalPoems: +1 }
            })
        }

        return res.status(201).json({
            message: "Story created successfully",
            response: response
        })


    } catch (err) {
        return res.status(500).json({
            message: err?.message,
            success: false
        })
    }
}



export const followUpStory = async (req, res) => {
    try {
        const user = req.user
        if (user.generationCredits <= 0) {
            return res.status(403).json({
                success: false,
                message: 'You have exhausted your generation credits. Please upgrade to Premium or wait for your monthly refresh.',
            });
        }
        const storyId = req.params.storyId
        if (!storyId) {
            return res.status(400).json({
                message: "story Id is required to take follow up",
                success: false
            })
        }
        const story = await sotryModel.findById(storyId)
        if (!story) {
            return res.status(400).json({
                message: "story not found",
                success: false
            })
        }
        const { followUpMessage } = req.body
        if (!followUpMessage) {
            return res.status(404).json({
                message: "Follow up message is required",
                success: false
            })
        }
        const stackedPrompt = `
        ### PREVIOUS CONTEXT ###
        ORIGINAL CONCEPT: "${story.userPrompt}"
        PREVIOUSLY GENERATED TEXT:
        """
        ${story.generatedText}
        """

        ### USER MODIFICATION REQUEST ###
        The user wants you to alter or expand the text above with this instruction:
        "${followUpMessage.trim()}"

        TASK: Rewrite the ${story.format} incorporating the new instruction while strictly preserving the existing [MOOD] (${story.mood}) and [GENRE] (${story.genre}) baseline.
        `.trim();

        const newContent = await generateContent({
            format: story.format,
            mood: story.mood,
            genre: story.genre,
            userPrompt: stackedPrompt
        })
        if (!newContent) {
            return res.status(400).json({
                message: "Failed to take followup",
                success: false
            })
        }
        await userModel.findByIdAndUpdate(user._id, {
            $inc: { generationCredits: -3 }
        })
        const updatedStory = await sotryModel.findByIdAndUpdate(storyId, {
            $set: { generatedText: newContent }
        }, { new: true })

        return res.status(200).json({
            success: true,
            message: "Story updated successfully!",
            data: updatedStory
        });
    } catch (err) {
        return res.status(500).json({
            message: err?.message,
            success: false
        })
    }
}

export const getAllContent = async (req, res) => {
    try {
        const user = req.user;

        const [stories, poems] = await Promise.all([
            sotryModel.find({ userId: user._id }).sort({ createdAt: -1 }),
            poemCreationModel.find({ userId: user._id }).sort({ createdAt: -1 })
        ]);

        return res.status(200).json({
            message: "Creations fetched successfully",
            success: true,
            data: {
                stories,
                poems
            }
        });
    } catch (err) {
        return res.status(500).json({
            message: err?.message,
            success: false
        });
    }
};

export const deleteContent = async (req, res) => {
    try {
        const { type, id } = req.params;
        const user = req.user;

        if (!type || !id) {
            return res.status(400).json({
                success: false,
                message: "Content type and ID are required for deletion."
            });
        }

        let model;
        if (type.toLowerCase() === 'story') {
            model = sotryModel;
        } else if (type.toLowerCase() === 'poetry') {
            model = poemCreationModel;
        } else {
            return res.status(400).json({
                success: false,
                message: "Invalid content type. Must be 'story' or 'poetry'."
            });
        }

        const deletedContent = await model.findOneAndDelete({
            _id: id,
            userId: user._id
        });

        if (!deletedContent) {
            return res.status(404).json({
                success: false,
                message: "Content not found or you don't have permission to delete it."
            });
        }

        return res.status(200).json({
            success: true,
            message: `${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully.`
        });

    } catch (err) {
        return res.status(500).json({
            message: err?.message,
            success: false
        });
    }
};

