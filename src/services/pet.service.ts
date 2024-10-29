import {
  PetRead,
  PetRequest,
  PetUpdate,
  PetCreated,
} from "../interfaces/pet.interface";
import { Pet } from "../entities/pet.entity";
import {
  createdPet,
  createPetSchema,
  readPetSchema,
} from "../schemas/pet.schema";
import petRepository from "../repositories/pet.repository";
import userRepository from "../repositories/user.repository";
import { AppError } from "../errors";
import { Shelter } from "../entities/shelter.entity";

export const createPetService = async (
  payload: PetRequest,
  shelter: Shelter
): Promise<PetCreated> => {
  const pet: Pet = petRepository.create({ ...payload, shelter });

  await petRepository.save(pet);

  return createdPet.parse(pet);
};

export const readPetService = async (): Promise<any> => {
  const pets = await petRepository
    .createQueryBuilder("pet")
    .leftJoinAndSelect("pet.shelter", "shelter")
    .leftJoinAndSelect("shelter.address", "address")
    .getMany();

  // console.log(JSON.stringify(pets, null, 2));

  return readPetSchema.parse(pets);
};

export const updatePetService = async (
  payload: PetUpdate,
  pet: Pet
): Promise<Pet> => {
  //   const updatedPet = await petRepository.update(petId, payload);
  // const findPet: Pet | null = await petRepository.findOne({
  //   where: {
  //     id: petId,
  //   },
  // });

  if (pet.adopted) {
    throw new AppError("Pet adotado não pode ser atualizado", 400);
  }

  const updated = await petRepository.save({ ...pet, ...payload });

  return updated;
};

export const deletePetService = async (pet: Pet): Promise<void> => {
  // const pet: Pet | null = await petRepository.findOneBy({ id: petId });

  await petRepository.remove(pet);
};

export const adoptPetService = async (
  petId: number,
  userId: number
): Promise<Pet> => {
  const pet = await petRepository.findOneBy({ id: petId });
  const user = await userRepository.findOneBy({ id: userId });

  if (!pet) {
    throw new AppError("Pet não encontrado", 400);
  }

  if (!user) {
    throw new AppError("Usuário não encontrado", 400);
  }

  pet.user = user;
  pet.adopted = true;
  await petRepository.save(pet);

  return pet;
};
