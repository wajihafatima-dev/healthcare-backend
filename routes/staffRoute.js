import express from "express";
import { addStaff, getStaffs, updateStaff, deleteStaff } from "../controllers/staffController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/",verifyToken, addStaff);
router.get("/",verifyToken, getStaffs);
router.put("/:id",verifyToken, updateStaff);
router.delete("/:id",verifyToken,deleteStaff);

export default router;
