import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import patientRoutes from "./routes/patientRoute.js"
import appointmentRoutes from "./routes/appointmentRoute.js"
import doctorRoutes from "./routes/doctorRoute.js"
import pharmacyRoutes from "./routes/pharmacyRoute.js"
import staffRoutes from "./routes/staffRoute.js"
import notificationRoutes from "./routes/notificationRoute.js"


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("HealthSync Backend Running"));

app.use("/api/users", userRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/pharmacy", pharmacyRoutes);
app.use("/api/staffs", staffRoutes);
app.use("/api/notifications", notificationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
