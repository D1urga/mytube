import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { Post } from "../models/posts.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
import { Comment } from "../models/comment.models.js";

const postComment = asyncHandler(async (req, res) => {
  const { owner } = req.params;
  const { comment } = req.body;

  const commentData = await Comment.create({
    comment,
    owner,
  });
  res.json({ data: commentData });
});

export { postComment };
