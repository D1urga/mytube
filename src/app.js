import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { upload } from "./middlewares/multer.middleware.js";
import { uploadOnCloudinary } from "./utils/cloudinary.js";

const app = express();

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

// routes import
import userRouter from "./routes/user.routes.js";

// route decleration

app.use("/api/v1/users", userRouter);
app.get("/sample", (req, res) => {
  res.json({ data: "working fine" });
});

app.get("/testing", (req, res) => {
  res
    .cookie("mycookie", "cookievalue")

    .json({ data: "sent" });
});

// app.get("/s", (req, res) => {
//   res.cookie("bsaSession", "cookies 2222", { httpOnly: false });
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.send("set");
// });

export { app };
