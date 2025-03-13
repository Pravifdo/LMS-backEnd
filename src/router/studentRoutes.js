import { Router } from "express";
import { getAllStudents, getStudentById, enrollCourse } from "../controllers/studentsController.js";

const studentRouter = Router();

studentRouter.get("/getAllStudents", getAllStudents);
studentRouter.get("/getStudentById/:id", getStudentById);
studentRouter.post("/enrollCourse", enrollCourse);

export default studentRouter;

