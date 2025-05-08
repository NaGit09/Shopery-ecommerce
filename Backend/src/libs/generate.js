import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.model.js";
// declare default avatar URL
const DEFAULT_AVATAR = "https://asset.cloudinary.com/dtnffqndg/ef89ff016ecd3a464c89a6abab6b3e14"; 
// define generate function 
export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.cookie("jwt" , token , {
    maxAge : 7 * 24 * 60  * 60 * 1000 ,
    httpOnly : true , 
    sameSite : "lax",
    secure : false
  })
  return token ;
};
export const generatePassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
export const generateDefaultUser = (fullName, email , password ) => {
  const [firstName, lastName] = fullName.split(" ");
  return new User({
        firstName : firstName,
        lastName : lastName,
        email : email,
        password: generatePassword(password),
        role: "user",
        avatar: DEFAULT_AVATAR, // Default avatar URL
      });
}