import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cookie from 'cookie-parser';
import bcrypt from 'bcryptjs';
import morgan from 'morgan'
dotenv.config();
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(cookie());
app.use(morgan("dev"))


app.get('/', (req, res) => {
    res.send("Welcome to  backend setup!");
});


//*Import routes
import userRoutes from './Modules/User/user.routes.js';
import storyRoutes from './Modules/Story/story.routes.js';
import chatRoutes from './Modules/MuseAI/chat.routes.js';
import settingRoutes from './Modules/Setting/setting.routes.js';


const baseUrl = "/api/v1"
//&Use routes
app.use(`${baseUrl}/auth`, userRoutes)
app.use(`${baseUrl}/story`, storyRoutes)
app.use(`${baseUrl}/muse`, chatRoutes)
app.use(`${baseUrl}/settings`, settingRoutes)

export default app;