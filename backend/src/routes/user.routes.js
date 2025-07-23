import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import  upload from "../middlewares/multer.middleware.js"

const router = Router();

// router.route("/register").post(registerUser);
// yaha koi bhi file upload hho to routes me controller call hone se pahe 
router.route("/register").post(
     upload.fields([
        {
            name : "avatar",        // ye eska name frontend me same hona chahiye 
            maxCount : 1
        },
        {
            name : "coverImage",
            maxCount : 1
        }
     ]),
    registerUser
);


export default router

