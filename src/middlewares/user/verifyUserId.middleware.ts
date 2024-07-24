import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";
import { User } from "../../entities/user.entity.ts";
import userRepository from "../../repositories/user.repository";

export const verifyUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = parseInt(req.body.userId);

  const user: User | null = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.locals = { ...res.locals, user };

  return next();
};
