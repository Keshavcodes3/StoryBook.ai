export const getPrompt = ({ actionType, fullStoryContent, textTarget, prompt }) => {
    let humanInstruction = "";

    // Normalize incoming string cases from the frontend action triggers
    switch (actionType?.toLowerCase()) {
        case "continue":
            humanInstruction = `Read the following story context carefully:
"${fullStoryContent}"

Task: Write the next 2-3 logical sentences to smoothly continue the narrative flow from the very end of the text. Crucially, match the exact perspective, tense, and character POV established above.`;
            break;

        case "rewrite":
            humanInstruction = `Read the full story context for structural background:
"${fullStoryContent}"

Task: Rewrite this specific target section to maximize its emotional weight, prose quality, and flow:
"${textTarget || fullStoryContent}"`;
            break;

        case "dramatic":
        case "make_it_dramatic": // Captures both naming conventions safely
            humanInstruction = `Read the full story context for structural background:
"${fullStoryContent}"

Task: Take this specific excerpt and intensely punch up its dramatic tension, inner stakes, emotional subtext, and sensory descriptions:
"${textTarget || fullStoryContent}"`;
            break;

        case "shorten":
            humanInstruction = `Trim down any linguistic fluff, eliminate overused adjectives, and dramatically tighten the pacing of this text snippet without dropping its core narrative plot value:
"${textTarget || fullStoryContent}"`;
            break;

        case "expand": // 🚀 Added missing feature link matching your UI mockup card
            humanInstruction = `Read the full story context for structural background:
"${fullStoryContent}"

Task: Elaborate on this specific target excerpt. Flesh out the environmental world-building details, physical character micro-expressions, or implicit atmospheres surrounding this moment:
"${textTarget || fullStoryContent}"`;
            break;

        case "custom": // 💡 Optional handler for if they type their own custom request prompt box
            humanInstruction = `Using the story context below:
"${fullStoryContent}"

Task: Execute this specific directive on the text target: ${prompt || "Polish the prose naturally"}`;
            break;

        default:
            humanInstruction = `Continue writing, polishing, or refining the text naturally based on this story context canvas: "${fullStoryContent}"`;
    }

    return humanInstruction;
};