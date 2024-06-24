import { Router } from "express";
import { userRouter } from "./user.route.js";
import { createTables } from "../controllers/table.controller.js";
import { courseRouter } from "./course.route.js";


export const router = Router()

router.get('/setup', createTables);
router.use('/', userRouter);
router.use('/', courseRouter)