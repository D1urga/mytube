import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { Post } from "../models/posts.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";

const postcont1 = asyncHandler(async (req, res) => {
  await res.json({ data: "data" });
});

const sendPost = asyncHandler(async (req, res) => {
  const { description, owner } = req.body;
  if ([description, owner].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "all fields required");
  }
  const postLocalPath = req.files?.post[0]?.path;
  if (!postLocalPath) {
    throw new ApiError(400, "post is required");
  }

  const posts = await uploadOnCloudinary(postLocalPath);

  const postdata = await Post.create({
    description,
    postFile: posts.url,
    owner,
  });
  res
    .status(201)
    .json(new ApiResponse(200, postdata, "post uploaded successfully"));
});

const getAllPosts = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    throw new ApiError(404, "user not found");
  }
  const data = await User.aggregate([
    { $match: { username: "anoop1" } },
    {
      $lookup: {
        from: "posts",
        localField: "_id",
        foreignField: "owner",
        as: "userPosts",
        pipeline: [
          {
            $lookup: {
              from: "comments",
              localField: "_id",
              foreignField: "owner",
              as: "userComments",
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: "followers",
        localField: "_id",
        foreignField: "followTo",
        as: "followers",
      },
    },
  ]);

  res.json({ data: data });
});

export { postcont1, sendPost, getAllPosts };
