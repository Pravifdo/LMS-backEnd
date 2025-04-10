import { Router } from "express";
import { loginUser, registerStudent, registerTeacher } from "../controllers/authController.js";

const authRouter = Router();

// Define routes for user registration and login
authRouter.post("/register/student", registerStudent);
authRouter.post("/register/teacher",registerTeacher);
authRouter.post("/login",loginUser);

export default authRouter;
