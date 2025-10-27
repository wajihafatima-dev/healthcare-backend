import express from "express";
import {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} from "../controllers/appointmentController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken,getAllAppointments);
router.get("/:id",verifyToken, getAppointmentById);
router.post("/",verifyToken, createAppointment);
router.put("/:id", verifyToken,updateAppointment);
router.delete("/:id",verifyToken,deleteAppointment);

export default router;
