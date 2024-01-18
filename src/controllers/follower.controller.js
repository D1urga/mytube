import { Follower } from "../models/followers.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const postFollower = asyncHandler(async (req, res) => {
  const { followTo, follower } = req.body;
  const data = await Follower.create({
    followTo,
    follower,
  });
  res.json({ data: data });
});

export { postFollower };
