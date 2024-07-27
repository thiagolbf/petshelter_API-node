import { Router } from "express";
import {
  readPetsController,
  createPetController,
  adoptPetController,
  deletePetController,
  updatePetController,
} from "../controllers/pet.controller";

import { validateBody } from "../middlewares/validateBody.middleware";
import { updatePetSchema } from "../schemas/pet.schema";
import { createPetSchema } from "../schemas/pet.schema";

import { verifyPetId } from "../middlewares/pet/verifyPetId.middleware";
import { verifyShelterId } from "../middlewares/shelter/verifyShelterId.middleware";

const petRouter: Router = Router();

petRouter.post(
  "",
  validateBody(createPetSchema),
  verifyShelterId,
  createPetController
);
petRouter.post("/adopt", adoptPetController);

petRouter.patch(
  "/:id",
  verifyPetId,
  validateBody(updatePetSchema),
  updatePetController
);

petRouter.get("", readPetsController);

petRouter.delete("", verifyPetId, deletePetController);

export default petRouter;
