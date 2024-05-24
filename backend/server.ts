import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import connectMongoDB from "./database/connectMongoDb";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(8000, () => {
  console.log(`Server listening on port ${PORT}`);
  connectMongoDB();
});

console.log(process.env.MONGO_URI);

app.use("/api/auth", authRoutes);
