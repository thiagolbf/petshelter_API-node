import { Request, Response } from "express";
import {
  createShelterService,
  readeShelterService,
} from "../services/shelter.service";
import { ShelterReturn, ShelterRead } from "../interfaces/shelter.interface";

export const createShelterController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const shelter: ShelterReturn = await createShelterService(req.body);

  return res.status(201).json(shelter);
};

export const readShelterController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const shelters: ShelterRead = await readeShelterService();

  return res.status(200).json(shelters);
};
