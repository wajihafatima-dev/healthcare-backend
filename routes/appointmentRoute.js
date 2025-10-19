import express from "express";
import {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} from "../controllers/appointmentController.js";
import { adminOnly, protect, staffOrAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/",protect, staffOrAdmin, getAllAppointments);
router.get("/:id", protect,staffOrAdmin, getAppointmentById);

// Admin-only 
router.post("/", protect, adminOnly, createAppointment);
router.put("/:id", protect, adminOnly, updateAppointment);
router.delete("/:id", protect, adminOnly, deleteAppointment);

export default router;
