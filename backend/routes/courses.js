import express from "express";
import { getCourses, createCourse, updateCourse, deleteCourse } from "../controllers/courseController.js";

const router = express.Router();

router.get("/", getCourses);           // GET /api/courses
router.post("/", createCourse);        // POST /api/courses
router.put("/:id", updateCourse);      // PUT /api/courses/:id
router.delete("/:id", deleteCourse);   // DELETE /api/courses/:id

export default router;