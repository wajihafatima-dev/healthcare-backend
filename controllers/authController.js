import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";


/**
 * @route  POST /api/auth/signup
 * @desc   Register new user (default role: staff). If correct ADMIN_CODE provided, role can be 'admin'
 * @body   { name, email, password, adminCode? }
 */
export const signup = asyncHandler(async (req, res) => {
  const { name, email, password, adminCode } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please provide name, email and password");
  }

  const existing = await User.findOne({ email });
  if (existing) {
    res.status(400);
    throw new Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  // Default role "staff". If adminCode matches env ADMIN_CODE, allow admin role.
  let role = "staff";
  if (adminCode && process.env.ADMIN_CODE && adminCode === process.env.ADMIN_CODE) {
    role = "admin";
  }

  const user = await User.create({ name, email, password: hashed, role });
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user._id),
  });
});

/**
 * @route  POST /api/auth/login
 * @desc   Authenticate user and return token
 * @body   { email, password }
 */
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide email and password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user._id),
  });
});

// Helper: create JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};
