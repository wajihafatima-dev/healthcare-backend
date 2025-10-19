import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "doctor", "staff", "patient"], 
    default: "staff"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);
export default User;
