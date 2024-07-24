import { Request, Response } from "express";
import {
  readPetService,
  createPetService,
  adoptPetService,
  deletePetService,
  updatePetService,
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

export const deletePetController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const pet = await deletePetService(req.body.pet);

  return res.status(204).json();
};

export const updatePetController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const petUpdated: Pet = await updatePetService(req.body, res.locals.pet);

  return res.status(200).json(petUpdated);
};

export const adoptPetController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const adoptPet: Pet = await adoptPetService(req.body.petId, req.body.userId);

  return res.status(200).json(adoptPet);
};
