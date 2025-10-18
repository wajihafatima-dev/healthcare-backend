import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  contact: String,
  email: String,
  experience: Number,
  availability: Boolean,
}, { timestamps: true });

export default mongoose.model("Doctor", doctorSchema);
