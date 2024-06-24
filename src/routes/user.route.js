import { Router } from "express";
import { createUser, getOneUser } from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.post('/user', createUser);
userRouter.get('/user', getOneUser);