import User from "../model/User.model.js";
import { generateToken } from "../libs/utils.js";
import bcrypt from "bcryptjs";
export const register = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    // Validate input
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Split fullname into firstName and lastName
    const [firstName, lastName] = fullname.split(" ");
    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: "user",
      avatar:
        "https://asset.cloudinary.com/dtnffqndg/ef89ff016ecd3a464c89a6abab6b3e14", // Default avatar URL
    });
    if (newUser) {
      await newUser.save();
      // Generate JWT token
      generateToken(newUser._id, res);
      return res.status(201).json({
        message: "User registered successfully",
        user: {
          id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          avatar: newUser.avatar,
          role: newUser.role,
        },
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
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
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
    res.clearCookie("jwt", { httpOnly: true, sameSite: "strict" });
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
