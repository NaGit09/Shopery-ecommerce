import bcrypt from "bcryptjs";

export const validateCreateUser = (fullName, email, password, res) => {
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
};
export const validatePassword = (password, res) => {
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters" });
  }
};
export const comparePassword = async (password, hashedPassword, res) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
};
export const validateLogin = (email, password) => {
  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
};
