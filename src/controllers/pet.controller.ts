import { Request, Response } from "express";
import { readPetService } from "../services/pet.service";
import { PetRead } from "../interfaces/pet.interface";

export const readPetsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const pets: PetRead = await readPetService();

  return res.status(200).json(pets);
};
