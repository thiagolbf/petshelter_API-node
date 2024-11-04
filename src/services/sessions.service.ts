import "dotenv/config";

import { AppError } from "../errors";
import { compare } from "bcryptjs";

import jwt from "jsonwebtoken";

import userRepository from "../repositories/user.repository";
import shelterRepository from "../repositories/shelter.repository";

export const createLoginService = async (payload: any): Promise<any> => {
  let checkPassword: boolean;

  const email = payload.email;

  const foundUser = await userRepository.findOneBy({ email });

  const foundShelter = await shelterRepository.findOneBy({ email });

  if (foundUser) {
    checkPassword = await compare(payload.password, foundUser.password);
    if (!checkPassword) throw new AppError("Invalid credentials", 401);
    return jwt.sign({ id: foundUser.id }, process.env.JWT_SECRET as string, {
      expiresIn: "24h",
    });
  }

  if (foundShelter) {
    checkPassword = await compare(payload.password, foundShelter.password);

    if (!checkPassword) throw new AppError("Invalid credentials", 401);
    return jwt.sign({ id: foundShelter.id }, process.env.JWT_SECRET as string, {
      expiresIn: "24h",
    });
  }

  if (!foundShelter || !foundUser) {
    throw new AppError("Invalid credentials", 401);
  }
};
