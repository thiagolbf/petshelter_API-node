import { Router } from "express";
import {
  createShelterController,
  readShelterController,
  readPaginationShelterController,
} from "../controllers/shelter.controller";

const shelterRouter: Router = Router();

shelterRouter.get("", readShelterController);
shelterRouter.get("/page/:id", readPaginationShelterController);
shelterRouter.post("", createShelterController);

export default shelterRouter;
