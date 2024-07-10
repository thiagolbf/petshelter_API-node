import { Router } from "express";
import { createAdressController } from "../controllers/adress.controller";

const adressRouter: Router = Router();

adressRouter.post("", createAdressController);

export default adressRouter;
