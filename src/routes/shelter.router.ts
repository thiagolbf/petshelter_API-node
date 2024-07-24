import { Router } from "express";
import {
  createShelterController,
  readShelterController,
  readPaginationShelterController,
} from "../controllers/shelter.controller";

import { validateBody } from "../middlewares/validateBody.middleware";
import { createShelterSchema } from "../schemas/shelter.schema";

import { verifyShelterEmail } from "../middlewares/shelter/verifyShelterEmail.middleware";

const shelterRouter: Router = Router();

shelterRouter.get("", readShelterController);
shelterRouter.get("/page/:id", readPaginationShelterController);

shelterRouter.post(
  "",
  validateBody(createShelterSchema),
  verifyShelterEmail,
  createShelterController
);

export default shelterRouter;
