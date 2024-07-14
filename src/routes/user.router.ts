import { Router } from "express";
import {
  createUserController,
  listUserPetController,
} from "../controllers/user.controller";

const userRouter: Router = Router();

userRouter.post("", createUserController);
userRouter.get("", listUserPetController);

export default userRouter;
