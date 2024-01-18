import { Router } from "express";
import { postFollower } from "../controllers/follower.controller.js";

const router = Router();

router.route("/follow").post(postFollower);

export default router;
