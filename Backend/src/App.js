import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cookie from 'cookie-parser';
import bcrypt from 'bcryptjs';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookie());



app.get('/', (req, res) => {
    res.send("Welcome to  backend setup!");
});


//*Import routes
import userRoutes from './Modules/User/user.routes.js';
import storyRoutes from './Modules/Story/story.routes.js';


const baseUrl = "/api/v1"
//&Use routes
app.use(`${baseUrl}/auth`, userRoutes)
app.use(`${baseUrl}/story`, storyRoutes)

export default app;