import { Request, Response } from "express";
import {
  readPetService,
  createPetService,
  adoptPetService,
} from "../services/pet.service";
import { PetRead } from "../interfaces/pet.interface";
import { Pet } from "../entities/pet.entity";

export const readPetsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const pets: PetRead = await readPetService();

  return res.status(200).json(pets);
};

export const createPetController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const pet: Pet = await createPetService(req.body);

  return res.status(201).json(pet);
};

export const adoptPetController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const adoptPet: Pet = await adoptPetService(req.body.petId, req.body.userId);

  return res.status(200).json(adoptPet);
};
