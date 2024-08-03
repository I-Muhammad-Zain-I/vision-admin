import mongoose, { MongooseError } from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: MongooseError | any) {
    console.error(`Error: ${error.messages}`);
    process.exit(1);
  }
};

export default connectDB;
