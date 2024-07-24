import {
  UserRequest,
  UserReturn,
  ListUserPets,
} from "../interfaces/user.interface";
import { User } from "../entities/user.entity.ts";
import { returnUserSchema, listPetUserSchema } from "../schemas/user.schema";
import userRepository from "../repositories/user.repository";
import petRepository from "../repositories/pet.repository";

export const createUserService = async (
  payload: UserRequest
): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);

  await userRepository.save(user);

  return returnUserSchema.parse(user);
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

  return listPetUserSchema.parse({
    id: user.id,
    name: user.name,
    pets: pets.map((pet) => ({
      id: pet.id,
      animalType: pet.animalType,
      gender: pet.gender,
      bio: pet.bio,
      castrated: pet.castrated,
      adopted: pet.adopted,
    })),
  });
};
