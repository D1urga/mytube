import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { upload } from "./middlewares/multer.middleware.js";
import { uploadOnCloudinary } from "./utils/cloudinary.js";

const app = express();

// app.set("trust proxy", 1);
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

// routes import
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import commentRouter from "./routes/comment.routes.js";
import followRouter from "./routes/follower.routes.js";

// route decleration
app.get("/cook", (req, res) => {
  res
    .cookie("cokkie1", "cookie1")
    .cookie("cokkie2", "cookie2")
    .cookie("cokkie3", "cookie3")
    .cookie("cokkie4", "cookie4")
    .cookie("cokkie5", "cookie5")

    .json({ data: "seted" });
});
app.get("/", (req, res) => {
  res.json({ data: req.cookies });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/follower", followRouter);

export { app };
