import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => res.send("HealthSync Backend Running"));

// Auth routes
app.use("/api/auth", authRoutes);

// // Example protected route (admin only)
// import { protect, authorizeRole } from "./middleware/authMiddleware.js";
// app.get("/api/admin-only", protect, authorizeRole("admin"), (req, res) => {
//   res.json({ message: `Welcome Admin ${req.user.name}` });
// });

// // Example protected route (staff or admin)
// app.get("/api/staff-area", protect, (req, res) => {
//   res.json({ message: `Hello ${req.user.role} ${req.user.name}` });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
