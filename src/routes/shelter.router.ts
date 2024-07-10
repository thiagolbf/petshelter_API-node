import { Router } from "express";
import {
  createShelterController,
  readShelterController,
} from "../controllers/shelter.controller";

const shelterRouter: Router = Router();

shelterRouter.get("", readShelterController);
shelterRouter.post("", createShelterController);

export default shelterRouter;
