import mongoose from "mongoose";

const connectDb = async ()=>{
    try {
       await  mongoose.connect(process.env.MONGO_URL) 
       console.log("DB Connected on Local");
       
    } catch (error) {
        console.log("Error message",error);
        
    }
  
}
export default connectDb