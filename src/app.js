import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3001/",
    allowedHeaders: true,
    allowCredentials: true,
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

export { app };
