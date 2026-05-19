import mongoose from "mongoose";


const chatSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    message: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        enum: ['chat', 'coach', 'feedback', 'prompt'],
        default: 'chat'
    },

}, {
    timestamps: true
})



const chatModel = mongoose.mode("Chat", chatSchema)


export default chatModel