import mongoose from "mongoose";

export async function connectDB() {
  let isConnected = false;

  if (isConnected) {
    return "DB Already Connected";
  }
  try {
    let dbConnection = await mongoose.connect(process.env.MONGODB_URI);
    if (dbConnection.connection.readyState == 1) {
      isConnected = true;
    }
  } catch (err) {
    console.log("err=>", err);
  }
}
