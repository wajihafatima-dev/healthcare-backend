import Pharmacy from "../models/pharmacyModel.js";

export const addMedicine = async (req, res) => {
  try {
    const med = new Pharmacy(req.body);
    await med.save();
    res.status(201).json(med);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getMedicines = async (req, res) => {
  try {
    const meds = await Pharmacy.find();
    res.json(meds);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateMedicine = async (req, res) => {
  try {
    const updated = await Pharmacy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteMedicine = async (req, res) => {
  try {
    await Pharmacy.findByIdAndDelete(req.params.id);
    res.json({ message: "Medicine deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
