import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { sessionSchema } from "../schemas/sessions.schema";

import { createLoginController } from "../controllers/session.controller";

const loginRouter: Router = Router();

loginRouter.post("", validateBody(sessionSchema), createLoginController);

export default loginRouter;
