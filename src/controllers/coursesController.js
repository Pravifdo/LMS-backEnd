import Course from "../models/Course.js";

//Get all courses
export const getAllCourses = async (req,res)=>{
    try{
        const courses = await Course.find();
        res.status(200).json({
            msg:"Coures found",
            data:courses
        });
    }catch(error){
        res.status(500).json({
            msg:"Internal server error",
            error:error.message
        });
    }
};

//Create a new course
export const createCourse = async(req,res) =>{
    try {
        const newCourse = new Course(req.body);
        await newCourse.save();
        console.log(newCourse);
        
    } catch (error) {
        res.status(500).json({
            msg:"Internal server error",
            error:error.message
        });
    }
};

//Get a course by id
export const getCourseById = async(req,res) =>{
    const {id} = req.params;
    try {
        const course =await Course.findById(id);
        res.status(200).json({
            msg:"Course found",
            data:course
        });
    } catch (error) {
        res.status(500).json({
            msg:"Internal server error",
            error:error.message
        });
    }

}

//Update a course
export const updateCourse = async(req,res)=>{
    const {id} = req.params;
    try {
        const updatedCourse = await Course.findByIdAndUpdate(id,req.body,{new:true});
        if(!updatedCourse){
            return res.status(404).json({
                msg:"Course not found"
            });
        }
        console.log(updatedCourse);
        res.status(200).json({
            msg:"Course updated",
            data:updatedCourse
        });
    } catch (error) {
        res.status(500).json({
            msg:"Internal server error",
            error:error.message
        });
    }
}

//Delete a course
export const deleteCourse = async(req,res)=>{
    const {id} = req.params;
    try {
        const deleteCourse = await Course.findByIdAndDelete(id);
        if(!deleteCourse){
            return res.status(404).json({
                msg:"Course not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            msg:"Internal server error",
            error:error.message
        });
    }
}