import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type :String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    enrolledCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }]
},
{
    timestamps:true
});
const Student = mongoose.model("Student",studentSchema);
export default Student;