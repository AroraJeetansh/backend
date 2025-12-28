import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'      //file system is the part of nodejs which is used to perform file handling operations


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath){
            return null;      
        }
        cloudinary.uploader.upload(localFilePath, {
            resource_type:'auto'
        })
        console.log("File is uploaded on cloudinary", response.url);
        return response;
    }
    catch(error){
       fs.unlinkSync(localFilePath); //this will eliminate the saved temporary file as the upload operation failed
       return null;
   
    }
}


export default uploadOnCloudinary;