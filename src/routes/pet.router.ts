import { Router } from "express";
import { readPetsController } from "../controllers/pet.controller";

const petRouter: Router = Router();

petRouter.get("", readPetsController);

export default petRouter;
