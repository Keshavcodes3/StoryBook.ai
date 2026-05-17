import mongoose from "mongoose";


export const connectToDB=async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log('connected to Database')
}