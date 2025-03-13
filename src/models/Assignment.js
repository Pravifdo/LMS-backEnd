import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course", //this is used to store the id of the course
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    submissions: [{
        student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
        fileUrl: { type: String },  // For uploaded files
        submittedAt: { type: Date, default: Date.now }
    }] //this is used to store the id of the student
},
{
    timestamps: true
});

const Assignment = mongoose.model("Assignment", assignmentSchema);
export default Assignment;
