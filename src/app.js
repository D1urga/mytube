import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { upload } from "./middlewares/multer.middleware.js";
import { uploadOnCloudinary } from "./utils/cloudinary.js";

const app = express();
// app.set("trust proxy", 1);
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

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

app.get("/getcookie", async (req, res) => {
  const data = await req.cookies;
  res.json({ data: data });
});
// app.post("/setcookie", (req, res) => {
//   res
//     .cookie("cookieee", "cookieValue")
//     .cookie("cookieee222222222", "cookieValue222222222")
//     .json({ data: "working" });
// });

// app.get("/s", (req, res) => {
//   res.cookie("bsaSession", "cookies 2222", { httpOnly: false });
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.send("set");
// });

export { app };
