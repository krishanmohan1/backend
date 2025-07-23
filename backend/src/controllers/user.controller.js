import { asyncHandler } from "../utils/asynchandler.js"

const registerUser = asyncHandler(async (req, res) => {
    
    // get user details from frontend
    // validate - not empty
    // check if user already exists : username , email
    // check for images, check for avatar 
    // upload them to cloudinary , avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation 
    // return res 

    const { email, username , fullName, password } = req.body       // es tarike se user ka body data aajata hai but files nhi aata hai uske liye , middleware multer ka use karenge , wo bhi routes me 

    console.log("email : ", email);
    

     




    
})


export { registerUser }

