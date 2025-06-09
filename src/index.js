// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERR:",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR:",error)
//         throw error
//     }
// })()
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
const port=process.env.PORT || 8000
connectDB().then(()=>{
    app.on((error)=>{
        console.log("error",error);
        throw error
    })
    app.listen(port,()=>{
            console.log(`Server is running on the port ${port}`)
    })
}).catch((error)=>{
    console.log("MONGODB connection failed !!!",error)
})