import User from "../models/User.model.js";
import { generateToken, generateDefaultUser } from "../libs/generate.js";
import {
  validateCreateUser,
  validatePassword,
  comparePassword,
  validateLogin,
} from "../libs/validation.js";
export const register = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    // validate input
    validateCreateUser(fullname, email, password, res);
    validatePassword(password, res);
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = generateDefaultUser(fullname, email, password);
    // Save user to database
    if (newUser) {
      await newUser.save();
      // Generate JWT token
      generateToken(newUser._id, res);
      return res.status(201).json({
        message: "User registered successfully",
        user: { ...newUser },
      });
    } else {
      return res.status(400).json({ message: "User registration failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    validateLogin;
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    //  check password
    comparePassword(password, user.password, res);
    // Generate JWT token
    generateToken(user._id, res);
    return res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
export const logout = async (req, res) => {
  try {
    const token = req.cookies?.jwt;

    console.log(token);

    if (!token) {
      return res.status(400).json({ message: "No JWT cookie found" });
    }

    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "strict",
      secure: true, // nên dùng nếu đang chạy HTTPS
    });

    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
