import { Router } from "express";
import {
  getAllPosts,
  postcont1,
  sendPost,
} from "../controllers/post.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { getCurrentUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/getpost").get(postcont1);
router
  .route("/postUpload")
  .post(upload.fields([{ name: "post", maxCount: 1 }]), sendPost);

router.route("/getposts/:id").get(verifyJWT, getAllPosts);

export default router;
