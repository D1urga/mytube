import mongoose from "mongoose";

const followerSchema = new mongoose.Schema(
  {
    followTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Follower = mongoose.model("Follower", followerSchema);
