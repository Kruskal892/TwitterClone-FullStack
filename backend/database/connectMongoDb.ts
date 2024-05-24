import mongoose from "mongoose";
const connectMongoDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }
    const connection = await mongoose.connect(mongoUri);
    console.log(
      "Connected to MongoDB successfully",
      connection.connection.host
    );
  } catch (error: any) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;