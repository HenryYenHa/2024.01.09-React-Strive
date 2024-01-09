import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectionString = process.env.MONGO_URL;
mongoose.connect(connectionString);
export default mongoose;
