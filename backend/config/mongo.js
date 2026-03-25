import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

// Connect without legacy options
mongoose.connect(MONGO_URI);

const db = mongoose.connection;

db.on("connected", () => console.log("✅ MongoDB connected!"));
db.on("error", (err) => console.error("❌ MongoDB connection error:", err));
db.on("disconnected", () => console.log("⚠️ MongoDB disconnected!"));

export default mongoose;