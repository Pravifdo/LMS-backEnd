import Course from "../models/Course.js";
import Assignment from "../models/Assignment.js";

//Get all teachers
export const getAllTeachers = async (req,res)=>{
    try{
       const teachers = await Teacher.find();
       res.status(200).json({
            msg:"Teachers found",
            data:teachers,   
        });
        console.log(teachers);
    }catch(error){
        res.status(500).json({
            msg:"Internal server error",
            error:error.message
        });
    }
};

//Create a new course(teacher only)
export const createCourse =async(req,res) =>{
    try {
        const {title,description} = req.body;
        const course = new Course({
            title,
            description
        });
        await course.save();
        console.log(course);
        res.status(201).json({
            msg:"Course created",
            data:course
        });
    } catch (error) {
        res.status(500).json({
            msg:"Internal server error",
            error:error.message
        });
    }
};

//delete a teacher
export const deleteTeacher = async(req,res)=>{
    const {id} = req.params;
    try {
        const teacher = await Teacher.findByIdAndDelete(id);
        if(!teacher){
            return res.status(404).json({
                msg:"Teacher not found"
            });
        }
        res.status(200).json({
            msg:"Teacher deleted"
        });
        console.log(teacher);
        
    } catch (error) {
        res.status(500).json({
            msg:"Internal server error",
            error:error.message
        });
    }
};

//Upload an asssignment
export const uploadAssignment = async(req,res)=>{
    try {
        const {courseId,title,description,dueDate} = req.body;
        const assignment = new Assignment({
            course:courseId,
            title,
            description,
            dueDate
        });
        await assignment.save();
        console.log(assignment);
        res.status(201).json({
            msg:"Assignment uploaded",
            data:assignment
        });
    } catch (error) {
        res.status(500).json({
            msg:"Internal server error",
            error:error.message
        });
    }
}

