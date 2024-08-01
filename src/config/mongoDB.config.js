import envs from "./envs.config.js";
import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    mongoose.connect(envs.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
