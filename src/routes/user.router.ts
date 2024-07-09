import { Router } from "express";
import { createUserController } from "../controllers/user.controller";

const userRouter: Router = Router();

userRouter.post("criar-usuario", createUserController);

export default userRouter;
