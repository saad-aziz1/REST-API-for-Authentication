import {v2 as cloudinary} from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()
import fs from 'fs'

//configration of cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINAEY_CLOUD_NAME, 
    api_key: process.env.CLOUDINAEY_API_KEY,
    api_secret: process.env.CLOUDINAEY_API_SECRET,
})

//Upload Image
const uploadImageOnCloudinary = async (filePath)=>{
    try {
        if(!filePath){
            return null
        }
        const result = await cloudinary.uploader.upload(filePath)
        console.log(result);

        fs.unlinkSync(filePath)
        return result.secure_url
        

    } catch (error) {
        fs.unlinkSync(filePath)
        console.log(error);
        
    }
}
export default uploadImageOnCloudinary