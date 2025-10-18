import mongoose from "mongoose";

// mongoose.connect(process.env.MONGO_URI);
// very basic implementation of connecting to mongodb

// Better approach -- using try-catch method.

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error", error);
    process.exit(1);
  }
};

export default connectDB;
