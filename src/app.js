import express from "express";
import cors from "cors";
import { TestingModel } from "./models/testing.models.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  await res.json({ data: "api is working fine" });
});

export { app };
