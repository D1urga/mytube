import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server started !!! port => ", 3000);
    });
  })
  .catch((error) => {
    console.log("mongodb connection failed", error);
  });
