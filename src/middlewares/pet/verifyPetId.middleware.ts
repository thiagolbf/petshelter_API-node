import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";
import { Pet } from "../../entities/pet.entity";
import petRepository from "../../repositories/pet.repository";

export const verifyPetId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const petId = parseInt(req.body.petId);

  const pet: Pet | null = await petRepository.findOneBy({ id: petId });

  if (!pet) {
    throw new AppError("Pet not found", 404);
  }

  res.locals = { ...res.locals, pet };

  return next();
};
