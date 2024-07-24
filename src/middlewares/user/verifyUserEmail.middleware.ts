import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";
import userRepository from "../../repositories/user.repository";

export const verifyUserEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;

  const emailExists: boolean = await userRepository.exists({
    where: { email },
  });

  if (emailExists) {
    throw new AppError("Email already registred", 409);
  }

  return next();
};
