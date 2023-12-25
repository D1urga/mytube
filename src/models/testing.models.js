import mongoose from "mongoose";

const testingSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  exp: {
    type: String,
  },
});

export const TestingModel = mongoose.model("TestingModel", testingSchema);
