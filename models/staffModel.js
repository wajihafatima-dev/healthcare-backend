import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ["nurse", "receptionist", "cleaner", "technician", "manager"], default: "nurse" },
  contact: String,
  email: String,
  shift: String,
  salary: Number
}, { timestamps: true });

export default mongoose.model("Staff", staffSchema);
