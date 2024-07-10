import { Router } from "express";
import { createUserController } from "../controllers/user.controller";

const userRouter: Router = Router();

userRouter.post("", createUserController);

export default userRouter;