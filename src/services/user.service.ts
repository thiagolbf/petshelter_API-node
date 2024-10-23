import { UserRequest, UserReturn } from "../interfaces/user.interface";
import { User } from "../entities/user.entity.ts";
import { returnUserSchema } from "../schemas/user.schema";
import { readPetSchema } from "../schemas/pet.schema";
import userRepository from "../repositories/user.repository";
import petRepository from "../repositories/pet.repository";

import { hash } from "bcryptjs";

export const createUserService = async (
  payload: UserRequest
): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);

  const hashedPassword = await hash(payload.password, 10);

  const newUser: UserRequest = {
    ...user,
    password: hashedPassword,
  };

  await userRepository.save(newUser);

  return returnUserSchema.parse(newUser);
};

export const listUserPetService = async (user: User): Promise<any> => {
  const pets = await petRepository
    .createQueryBuilder("pet")
    .leftJoinAndSelect("pet.shelter", "shelter")
    .leftJoinAndSelect("shelter.address", "address")
    .where("pet.userId = :userId", { userId: user.id })
    .getMany();

  return readPetSchema.parse(pets);
};
