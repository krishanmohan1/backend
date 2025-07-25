// ye reusable code hai ,, aage bhi next kisi project me kaam aajayega 

// steps - hum user se file upload karayeng multer ke through server pe usko store karenge thne hum , usko cloudinary pe store karayenge , yani ye ki agar incase , cloudinary pe upoad nhi hua to ,hum usko retry kar sakte hai m and jab file upload ho jauuge ato usko server se remove kar denge 

import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

  // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET   // Click 'View API Keys' above to copy your API secret
    });


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        // file has been uploaded successfully 
        // console.log("file is uploaded on cloudinary", response.url);             // ye line dikha rahi hai ki file upload ho gya hai 
        fs.unlinkSync(localFilePath)                                        // es line se agar file upload successfully bhi upload ho jayega to remove ho jayega server se .
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)    // remove the locally sabed temporary files as the uploaded opertaion got failed
        return null
    }
}

export  {uploadOnCloudinary}