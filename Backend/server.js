import('dotenv/config')

import app from "./src/App.js";

import { connectToDB } from "./src/config/database.js";
const PORT=process.env.PORT || 3000

connectToDB()
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})