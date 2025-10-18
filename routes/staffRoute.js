import express from "express";
import { addStaff, getStaffs, updateStaff, deleteStaff } from "../controllers/staffController.js";

const router = express.Router();

router.post("/", addStaff);
router.get("/", getStaffs);
router.put("/:id", updateStaff);
router.delete("/:id", deleteStaff);

export default router;
