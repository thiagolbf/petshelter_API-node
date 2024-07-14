import { Router } from "express";
import {
  readPetsController,
  createPetController,
  adoptPetController,
} from "../controllers/pet.controller";

const petRouter: Router = Router();

petRouter.post("", createPetController);
petRouter.post("/adopt", adoptPetController);
petRouter.get("", readPetsController);

export default petRouter;
