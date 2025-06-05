import { Router } from "express";
import { createCourse, deleteCourse, getAllCourses, getCourseByCode, updateCourse } from "../controllers/coursesController.js";

const coursesRouter = Router();

// Define a route for fetching all courses
coursesRouter.get("/getAllCourses", getAllCourses);
coursesRouter.get("/courses/:id", getCourseByCode);
coursesRouter.post("/courses/create", createCourse);
coursesRouter.put("/updateCourse/:id", updateCourse);
coursesRouter.delete("/deleteCourse/:id", deleteCourse);


export default coursesRouter;
