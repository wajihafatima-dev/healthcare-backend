import mongoose from "mongoose";

const pharmacySchema = new mongoose.Schema({
  medicineName: { type: String, required: true },
  category: String,
  quantity: Number,
  price: Number,
  expiryDate: Date,
  supplier: String
}, { timestamps: true });

export default mongoose.model("Pharmacy", pharmacySchema);
