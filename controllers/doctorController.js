import Doctor from "../models/doctorModel.js";

// 🩺 Create a new doctor
export const createDoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 📋 Get all doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔍 Get doctor by ID
export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏️ Update doctor
export const updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDoctor)
      return res.status(404).json({ message: "Doctor not found" });
    res.status(200).json(updatedDoctor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 🗑️ Delete doctor
export const deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor)
      return res.status(404).json({ message: "Doctor not found" });
    res.status(200).json({ message: "Doctor removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
