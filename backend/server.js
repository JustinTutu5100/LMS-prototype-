// server.js
import express from "express";
import cors from "cors";
import "./config/mongo.js"; // Connect to MongoDB
import authRoutes from "./routes/auth.js";
import coursesRoutes from "./routes/courses.js";
import lessonsRoutes from "./routes/lessons.js";
import os from "os";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Root route for backend confirmation
app.get("/", (req, res) => {
  res.send("<h2>✅ Backend server is running and MongoDB is connected!</h2>");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/lessons", lessonsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  const interfaces = os.networkInterfaces();
  let network = "";
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        network = `http://${iface.address}:${PORT}`;
        break;
      }
    }
    if (network) break;
  }
  console.log("  ➜  Local:   http://localhost:" + PORT + "/");
  if (network) console.log("  ➜  Network: " + network + "/");
  else console.log("  ➜  Network: use --host to expose");
  console.log("✅ Backend server is running!");
});