import {
  UserRequest,
  UserReturn,
  ListUserPets,
} from "../interfaces/user.interface";
import { User } from "../entities/user.entity.ts";
import { returnUserSchema, listPetUserSchema } from "../schemas/user.schema";
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

export const listUserPetService = async (user: User): Promise<ListUserPets> => {
  // const user = await userRepository.findOneBy({ id: userId });

  // if (!user) {
  //   throw new Error("User not found");
  // }

  const pets = await petRepository
    .createQueryBuilder("pet")
    .where("pet.userId = :userId", { userId: user.id })
    .getMany();

  console.log(pets);
  console.log(user.id);
  console.log(user.name);

  return listPetUserSchema.parse({
    id: user.id,
    name: user.name,
    pets: pets.map((pet) => ({
      id: pet.id,
      name: pet.name,
      type: pet.type,
      gender: pet.gender,
      adopted: pet.adopted,
      castrated: pet.castrated,
      bio: pet.bio,
      createdAt: pet.createdAt,
      updatedAt: pet.updatedAt,
    })),
  });
};
