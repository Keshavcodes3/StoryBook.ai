import { protect } from "../../Middlewares/protect.js";

import express from 'express'
import { getMe, loginUser, registerUser } from "./user.controller.js";


const userRoutes = express.Router()


userRoutes.post('/register', registerUser)
userRoutes.post('/login', loginUser)
userRoutes.get('/me', protect, getMe)


export default userRoutes