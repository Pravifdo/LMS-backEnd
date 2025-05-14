import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },

  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher", // Link to Teacher model
    required: true,
  },

  lessons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson", // Optional: if you have lesson documents
  }],

  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student", // Link to Student model
  }],
  
  materials: {
    pdf: { type: String },           // PDF file link
    notes: [{ type: String }],       // Array of notes
    assignments: [{ type: String }]  // Array of assignments
  }

}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);
export default Course;
