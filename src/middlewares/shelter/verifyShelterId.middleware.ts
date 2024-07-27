import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";
import shelterRepository from "../../repositories/shelter.repository";
import { Shelter } from "../../entities/shelter.entity";

export const verifyShelterId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const shelterId = parseInt(req.body.shelterId) || parseInt(req.params.id);

  const shelter: Shelter | null = await shelterRepository.findOneBy({
    id: shelterId,
  });

  if (!shelter) {
    throw new AppError("Shelter not found", 404);
  }

  res.locals = { ...res.locals, shelter };
};
