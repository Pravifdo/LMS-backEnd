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

//Get a course by id (fixed for frontend)
export const getCourseByCode = async(req,res) =>{
    const { id } = req.params;
    console.log("ID:", id); // Log the ID to check if it's being received correctly

    try {
      const course = await Course.findById(id);
        console.log("ava");
      if (!course) {
        console.log("Course found");
        return res.status(404).json({
          msg: "Course not found",
        });
      }
  
      // Flatten the materials object for frontend compatibility
      const modifiedCourse = {
        _id: course._id,
        title: course.title,
        description: course.description,
        instructor: course.instructor,
        lessons: course.lessons,
        students: course.students,
        // flattening materials
        notes: course.materials?.notes || [],
        assignments: course.materials?.assignments || [],
        videos: course.materials?.videos || [], // add this if you plan to have video field
      };
  
      res.status(200).json({data:modifiedCourse});
      
    } catch (error) {
      res.status(500).json({
        msg: "Internal server error",
        error: error.message,
      });
    }
  };