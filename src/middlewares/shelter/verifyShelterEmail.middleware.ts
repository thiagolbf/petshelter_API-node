import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";
import shelterRepository from "../../repositories/shelter.repository";

export const verifyShelterEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;

  const emailExists: boolean = await shelterRepository.exists({
    where: { email },
  });

  if (emailExists) {
    throw new AppError("Email already registred", 409);
  }

  return next();
};
