import express from "express";
import {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} from "../controllers/appointmentController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAllAppointments);
router.get("/:id", protect, getAppointmentById);

// Admin-only 
router.post("/", protect, adminOnly, createAppointment);
router.put("/:id", protect, adminOnly, updateAppointment);
router.delete("/:id", protect, adminOnly, deleteAppointment);

export default router;
