import Course from "../models/Course.js";
import Student from "../models/Student.js";

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      msg: "Students found",
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Database error",
      error: error.message,
    });
  }
};

// Get student by ID
export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ msg: "Student not found" });
    }
    res.status(200).json({ msg: "Student found", data: student });
  } catch (error) {
    res.status(500).json({ msg: "Database error", error: error.message });
  }
};

// Enroll student in a course
export const enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.body;
    const student = await Student.findById(req.user.id);
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ msg: "Course not found" });
    }

    course.students.push(student._id);
    await course.save();

    student.courses.push(course._id);
    await student.save();

    res.status(200).json({ msg: "Course enrolled", data: course });
  } catch (error) {
    res.status(500).json({ msg: "Database error", error: error.message });
  }
};
