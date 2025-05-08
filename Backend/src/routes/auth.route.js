import {logout ,register, login } from "../controllers/auth.controller.js";
import { Router } from "express";
const GET = {
  logout: {
    path: "/logout",
    controller: logout,
  },
};
const POST = {
  register: {
    path: "/register",
    controller: register,
  },
  login: {
    path: "/login",
    controller: login,
  },
};
const router = Router();
// define get method
router.get(GET.logout.path , GET.logout.controller);
// define post method 
router.post(POST.login.path , POST.login.controller);
router.post(POST.register.path , POST.register.controller);
export default router;
