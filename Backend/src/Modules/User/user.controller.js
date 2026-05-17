import sendResponse from '../../Common/sendResponse.js';
import userModel from './user.model.js';
import jwt from 'jsonwebtoken';
import userUtils from './user.utils.js';

/**
 * @desc    Register a new user for storybook.ai
 * @route   POST /api/v1/auth/register
 * @access  Public
 */
export const registerUser = async (req, res) => {
    try {
        const { username, email, password, avatar } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a username, email, and password.',
            });
        }


        const existingUser = await userModel.findOne({
            $or: [{ email: email.toLowerCase() }, { username }],
        });

        if (existingUser) {
            const conflictField = existingUser.email === email.toLowerCase() ? 'Email' : 'Username';
            return sendResponse.sendErrorResponse({
                res,
                statusCode: 403,
                message: `${conflictField} is already registered.`,
                errorMessage: "User already exist with email"
            })
        }

        const newUser = await userModel.create({
            username,
            email,
            password,
            avatar: avatar || '',
        });

        const token = userUtils.generateToken({ id: newUser._id, tier: newUser.tier })

        const cookieOptions = {
            expires: new Date(
                Date.now() + (parseInt(process.env.COOKIE_EXPIRE) || 7) * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'strict', 
        };

      
        return res
            .status(201)
            .cookie('token', token, cookieOptions)
            .json({
                success: true,
                message: 'Account created successfully!',
                user: newUser,
            });

    } catch (error) {
        console.error('Registration Error:', error);

       
        if (error.name === 'ValidationError') {
            const validationMessages = Object.values(error.errors).map((err) => err.message);
            return res.status(400).json({
                success: false,
                message: validationMessages[0], 
            });
        }

        return res.status(500).json({
            success: false,
            message: 'Server error encountered during registration. Please try again later.',
        });
    }
};




/**
 * @desc    Authenticate user & get token
 * @route   POST /api/v1/auth/login
 * @access  Public
 */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both an email and a password.',
      });
    }

    const user = await userModel.findOne({ email: email.toLowerCase() }).select('+password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    
    const isMatch = await user.comparePassword(password);
    
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    
    const token = jwt.sign(
      { id: user._id, tier: user.tier },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

   
    const cookieOptions = {
      expires: new Date(
        Date.now() + (parseInt(process.env.COOKIE_EXPIRE) || 7) * 24 * 60 * 60 * 1000
      ),
      httpOnly: true, // Safeguards against XSS cookie theft
      secure: process.env.NODE_ENV === 'production', // Sent over HTTPS only in production
      sameSite: 'strict', // Mitigates CSRF vulnerabilities
    };
    res.cookie('token', token, cookieOptions)
    return res
      .status(200)
      .json({
        success: true,
        message: 'Logged in successfully!',
        user,
      });

  } catch (error) {
    console.error('Login Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error encountered during login. Please try again later.',
    });
  }
};



/**
 * @desc    Get current logged-in user profile
 * @route   GET /api/v1/auth/me
 * @access  Private (Requires authentication middleware)
 */
export const getMe = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(404).json({
        success: false,
        message: 'User profile not found.',
      });
    }

   
    return res.status(200).json({
      success: true,
      user: req.user,
    });
    
  } catch (error) {
    console.error('GetMe Controller Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error encountered while fetching profile.',
    });
  }
};

