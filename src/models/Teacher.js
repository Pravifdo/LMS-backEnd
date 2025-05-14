import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },

  // Subject with name and code
  subject: {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },

  // Linked Course documents
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", // Reference to Course model
    },
  ],

  role: {
    type: String,
    default: "teacher",
  },
}, { timestamps: true });

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
