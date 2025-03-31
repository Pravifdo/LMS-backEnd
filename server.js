import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // ✅ Import CORS
import { createCourse, getAllCourses } from './src/controllers/coursesController.js';
import connectDB from './src/databases/databases.js';
import coursesRouter from './src/router/coursesRoutes.js';
import authRouter from './src/router/authConrollerRoutes';
import studentRouter from './src/router/studentRoutes.js';
import teacherRouter from './src/router/teacherRoutes.js';

dotenv.config(); // Load environment variables

const server = express();
connectDB();

server.use(cors()); // ✅ Enable CORS for all origins
server.use(express.json()); // ✅ Middleware for JSON parsing

// ✅ Optionally, configure CORS more securely (only allow React frontend)
server.use(
  cors({
    origin: "http://localhost:3000", // Allow requests only from React frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

// Routes
server.use('/api/v1', coursesRouter);
server.use('/api/v1', authRouter);
server.use('/api/v1', studentRouter);
server.use('/api/v1', teacherRouter);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
