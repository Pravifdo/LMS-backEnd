import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // this is used to store the id of the user
        required: true
    },
    lessons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson" // this is used to store the id of the lesson
    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // this is used to store the id of the user
    }]
});

// ✅ Use the correct variable name (courseSchema)
export default mongoose.model("Course", courseSchema);
