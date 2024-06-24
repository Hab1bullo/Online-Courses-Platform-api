import { Router } from "express";
import { createCourse } from "../controllers/course.controller.js";


export const courseRouter = Router();

courseRouter.post('/course', createCourse);