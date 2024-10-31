import { AppError } from "../errors";
import { compare } from "bcryptjs";

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
    return "ok";
  }

  if (foundShelter) {
    checkPassword = await compare(payload.password, foundShelter.password);
    console.log(foundShelter);
    console.log(payload.password);
    if (!checkPassword) throw new AppError("Invalid credentials", 401);
    return "ok";
  }

  if (!foundShelter || !foundUser) {
    throw new AppError("Invalid credentials", 401);
  }
};
