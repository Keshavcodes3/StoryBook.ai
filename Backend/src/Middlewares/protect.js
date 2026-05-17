import jwt from 'jsonwebtoken';
import userModel from '../Modules/User/user.model.js';


export const protect = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (!token || token === 'none') {
            return res.status(401).json({
                success: false,
                message: 'Access denied. You must be logged in to view this resource.',
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        const currentUser = await userModel.findById(decoded.id);

        if (!currentUser) {
            return res.status(401).json({
                success: false,
                message: 'The user belonging to this token no longer exists.',
            });
        }

        req.user = currentUser;

        next();

    } catch (error) {
        console.error('Auth Middleware Error:', error);

        return res.status(401).json({
            success: false,
            message: 'Session expired or invalid token. Please log in again.',
        });
    }
};