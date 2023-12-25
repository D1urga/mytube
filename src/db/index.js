import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://anoop:anoop123@myyoutubedatabase.7rfvtbu.mongodb.net/databases?retryWrites=true&w=majority"
    );
    console.log(`mongodb connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("mongoose", error);
    process.exit(1);
  }
};

export { connectDB };
