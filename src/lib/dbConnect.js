import mongoose from "mongoose";

export async function connectDB() {
  try {
    let dbConnection = await mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    console.log("err=>", err);
  }
}
