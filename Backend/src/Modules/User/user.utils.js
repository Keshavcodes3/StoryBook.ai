import jwt from 'jsonwebtoken'



const generateToken = ({ id, tier }) => {
    const token=jwt.sign(
        { id, tier },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );
    return token
}





const userUtils={
    generateToken
}


export default userUtils