import { Router } from "express";
import { createCourse, deleteTeacher, getAllTeachers, uploadAssignment } from "../controllers/teachersController.js";


const teacherRouter = Router();

teacherRouter.get('/getAllTeacher',getAllTeachers);
teacherRouter.post('/createCourse',createCourse);
teacherRouter.delete('/deleteTeacher',deleteTeacher);
teacherRouter.put('/uploadAssignment',uploadAssignment);

export default teacherRouter;
