import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // fixed typo
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true, // added for login
  },
  enrolledCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", // assuming you have a Course model
    },
  ],
}, {
  timestamps: true,
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
