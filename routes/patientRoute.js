import express from "express";
import {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} from "../controllers/patientController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken,createPatient);
router.get("/",verifyToken, getAllPatients);
router.get("/:id",verifyToken, getPatientById);
router.put("/:id",verifyToken,updatePatient);
router.delete("/:id",verifyToken, deletePatient);

export default router;
