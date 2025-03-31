import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";

// Register a new student
export const registerStudent = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log("Received Data:", req.body); // Debugging line
    // Check if user already exists
    let existingStudent = await Student.findOne({ email });
    if (existingStudent)
      return res.status(400).json({
        msg: "Student already exists",
      });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new student
    const newStudent = new Student({ name, email, password: hashedPassword });
    await newStudent.save();

    res.status(201).json({
      msg: "Student registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error registering student",
      error: error.message,
    });
  }
};

// Register a new teacher
export const registerTeacher = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    let existingTeacher = await Teacher.findOne({ email });

    if (existingTeacher)
      return res.status(400).json({
        msg: "Teacher already exists",
      });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new teacher
    const newTeacher = new Teacher({ name, email, password: hashedPassword });
    await newTeacher.save();

    res.status(201).json({ msg: "Teacher registered successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error registering teacher", error: error.message });
  }
};

// User login (Student or Teacher)
export const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    console.log("Login Data:", req.body); // Debugging line

    let user;
    if (role === "student") {
      user = await Student.findOne({ email });
    } else if (role === "teacher") {
      user = await Teacher.findOne({ email });
    } else {
      return res.status(400).json({
        msg: "Invalid role",
      });
    }

    if (!user)
      return res.status(404).json({
        msg: "User not found",
      });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        msg: "Invalid credentials",
      });
      
    // Generate JWT token
    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      msg: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error logging in",
      error: error.message,
    });
  }
};
