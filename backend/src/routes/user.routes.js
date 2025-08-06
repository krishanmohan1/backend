import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  getUserChannelProfile,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
  updateUserAvatar,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

// router.route("/register").post(registerUser);
// yaha koi bhi file upload hho to routes me controller call hone se pahe

router.route("/register").post(
  upload.fields([
    {
      name: "avatar", // ye eska name frontend me same hona chahiye
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account").patch(verifyJWT, updateAccountDetails); // post me sara details update ho jagega isiliye , patch

router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar); // upload me files tha , but yaha par ek he file update hoo rahi rahi hai isiliye , single aur uska naam
router
  .route("/cover-image")
  .patch(verifyJWT, upload.single("coverImage").updateUserCoverImage);

router.route("/c/:username").get(verifyJWT, getUserChannelProfile);

router.route("/history").get(verifyJWT, getWatchedHistory);

export default router;
