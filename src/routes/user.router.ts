import { Router } from "express";
import {
  createUserController,
  listUserPetController,
} from "../controllers/user.controller";

import { validateBody } from "../middlewares/validateBody.middleware";
import { createUserSchema } from "../schemas/user.schema";

import { verifyUserId } from "../middlewares/user/verifyUserId.middleware";
import { verifyUserEmail } from "../middlewares/user/verifyUserEmail.middleware";

const userRouter: Router = Router();

userRouter.get("/:id", verifyUserId, listUserPetController);

userRouter.post(
  "",
  validateBody(createUserSchema),
  verifyUserEmail,
  createUserController
);

export default userRouter;
