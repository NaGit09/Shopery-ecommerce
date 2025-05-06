import mongoose from "mongoose";
//  connects to the MongoDB database using Mongoose
export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(connect.connection.host);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
};
