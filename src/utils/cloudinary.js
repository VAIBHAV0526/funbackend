import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'
          
cloudinary.config({ 
  cloud_name:process.env.cloud_name, 
  api_key: process.env.api_key, 
  api_secret: process.env.api_key.api_secret
});
const uplodoncloudinary= async (file)=>{
try{
if(!file){
    return null
}
// upload image to cloudinary
const res=await cloudinary.uploader.upload(file,
    {
        resource_type: "auto",
    });
    console.log("file uploaded on cloudinary",res.url);
    return res;

    // remove 
}catch(err){
fs.unlinkSync(file); // remove local saved file
return null;
}
}
export {uplodoncloudinary}