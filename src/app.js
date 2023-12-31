import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { upload } from "./middlewares/multer.middleware.js";
import { uploadOnCloudinary } from "./utils/cloudinary.js";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3001/",
    allowedHeaders: true,
    allowCredentials: true,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
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

export { app };
