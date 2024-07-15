import { Router } from "express";
import {
  readPetsController,
  createPetController,
  adoptPetController,
  deletePetController,
  updatePetController,
} from "../controllers/pet.controller";

const petRouter: Router = Router();

petRouter.post("", createPetController);
petRouter.post("/adopt", adoptPetController);

petRouter.patch("", updatePetController);

petRouter.get("", readPetsController);

petRouter.delete("", deletePetController);

export default petRouter;
