import express from "express";
import {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctorController.js";

const router = express.Router();

router.post("/", createDoctor);        // ➕ Add doctor
router.get("/", getDoctors);           // 📋 Get all doctors
router.get("/:id", getDoctorById);     // 🔍 Get single doctor
router.put("/:id", updateDoctor);      // ✏️ Update doctor info
router.delete("/:id", deleteDoctor);   // 🗑️ Remove doctor

export default router;
