import express from "express";
import { verifyToken, isAdmin, isStaff } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Admin-only route
router.get("/admin", verifyToken, isAdmin, (req, res) => {
  res.json({ message: "Welcome Admin Dashboard", user: req.user });
});

// ✅ Staff-only route
router.get("/staff", verifyToken, isStaff, (req, res) => {
  res.json({ message: "Welcome Staff Dashboard", user: req.user });
});

export default router;
