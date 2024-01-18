import { Router } from "express";
import { postComment } from "../controllers/comment.controller.js";

const router = Router();

router.route("/postComment/:owner").post(postComment);

export default router;
