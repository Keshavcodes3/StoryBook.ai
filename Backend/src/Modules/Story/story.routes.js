import express from 'express'
import { createNewContent, deleteContent, followUpStory, getAllContent } from './story.controller.js'
import { protect } from '../../Middlewares/protect.js'

const storyRoutes = express.Router()

storyRoutes.post('/create', protect, createNewContent)
storyRoutes.post('/follow-up/:storyId', protect, followUpStory)
storyRoutes.get('/all', protect, getAllContent)
storyRoutes.delete('/delete/:type/:id', protect, deleteContent)




export default storyRoutes