import express from "express";
import { verifyToken, isAdmin, isStaff } from "../middleware/authMiddleware.js";
import { deleteUser, getUserById, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/admin", verifyToken, isAdmin, (req, res) => {
  res.json({ message: "Welcome Admin Dashboard", user: req.user });
});

router.get("/staff", verifyToken, isStaff, (req, res) => {
  res.json({ message: "Welcome Staff Dashboard", user: req.user });
});
router.get("/:id", verifyToken, getUserById);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, isAdmin, deleteUser);
export default router;
