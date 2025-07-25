import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

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

  const { email, username, fullName, password } = req.body; // es tarike se user ka body data aajata hai but files nhi aata hai uske liye , middleware multer ka use karenge , wo bhi routes me
  console.log(req.body);

  console.log("email : ", email);

  //   if(fullName == ""){
  //     throw new ApiError(400, "full name is required ")
  //   }
  // });

  // aise jitne fields hai unko ek ek karke kitne baar validate karoge

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are compulsory");
  }

  // emails ka vaidation kar sakte hai ki usme @ hai ki nhi , industry me ek validation ki file bana lete hai , aur us method ko yaha use karte hai vaidate karne me .

  const existedUser = await User.findOne({
    $or: [{ username }, { email }], // ye tarika hai $or ko use karke validate karne ka , Database call User khud karega
  });

  console.log("Exiting user : ", existedUser);

  if (existedUser) {
    throw new ApiError(409, "User Already exist");
  }

  // files ko handle kaise karte hai

  const avatarLocalPath = req.files?.avatar[0].path;
//   const coverImageLocalPath = req.files?.coverImage[0].path;

// ye  coverImage pe validation lag gya 
  let coverImageLocalPath;
  if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
    coverImageLocalPath = req.files.coverImage[0].path
  }


  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath); // servers pe upload hone me time lagta hai , humse bhalle he fractions of second me dikhta hai
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  //  ye check kiye ki coudnary pe upload hua ki nhi

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  // aab database me entry karenge

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "", // corner case   // ye yaha hum check kar rahe hai , agar cover image ho tabhi db me save karenge , kyu ki esko upper me check kiya he nhi hai isiliye .
    email,
    password,
    username: username.toLowerCase(),
  });

  // aab yaha vaidate karo ki db me User bana nhi hai ki nhi  , mongodb har entry me by default ek _id laga deta hai

  // ye tarika se check kiya user db me bana ki nhi then usme me password aur refresh token ko remove kiya jo response aaya
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    return new ApiError(500, "Something went wromg while registering user");
  }

  // ye ja last me db me save ho jayega to response return hoga
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully "));
});

export { registerUser };
