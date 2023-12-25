import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db/index.js";
import { TestingModel } from "./models/testing.models.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  await res.json({ data: "api is working fine" });
});
app.get("/data", (req, res) => {
  res.json({ data: "anoop" });
});

app.post("/postdata", async (req, res) => {
  const data = await TestingModel.create(req.body);
  res.json({ data: data });
});

connectDB();

app.listen(process.env.PORT, () => {
  console.log("server started !!! port => ", process.env.PORT);
});
