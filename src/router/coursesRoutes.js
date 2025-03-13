import { Router } from "express";
import { createCourse, deleteCourse, getAllCourses, getCourseById, updateCourse } from "../controllers/coursesController.js";

const coursesRouter = Router();

// Define a route for fetching all courses
coursesRouter.get("/getAllCourses", getAllCourses);
coursesRouter.post("/createCourse", createCourse);
coursesRouter.get("/getCourseById/:id", getCourseById);
coursesRouter.put("/updateCourse/:id", updateCourse);
coursesRouter.delete("/deleteCourse/:id", deleteCourse);


export default coursesRouter;
