import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asynchandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async(req, _, next) =>{

    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
        // ye like access token de rahi hai , ya to cookies se ya header se 
    
        if(!token){
            throw new ApiError(401, "Unauthorized request")
        }
    
        // agar token hai to JWT se poochna padega ye token sahi hai ye nhi hai 
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        // kai baar jwt me bhi await lagana padta hai 
    
        const user = await User.findById(decodedToken?._id).select("-password, -refreshToken")
    
        // agar user nhi mila to 
        if(!user){
            // ToDo Discuss about frontend
            throw new ApiError(401, "Invalid Access Token")
        }
    
        // jab ye user ka access mil gya hai tab , req me es user ko add kar denge 
    
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }


})