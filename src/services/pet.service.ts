import { PetRead, PetRequest, PetUpdate } from "../interfaces/pet.interface";
import { Pet } from "../entities/pet.entity";
import { readPetSchema } from "../schemas/pet.schema";
import petRepository from "../repositories/pet.repository";

export const createPetService = async (payload: PetRequest): Promise<Pet> => {
  const pet: Pet = petRepository.create(payload);

  await petRepository.save(pet);

  return pet;
};

export const readPetService = async (): Promise<PetRead> => {
  const pets = await petRepository
    .createQueryBuilder("pet")
    .leftJoin("pet.shelter", "shelter")
    .getMany();

  return readPetSchema.parse(pets);
};

export const updatePetService = async (
  payload: PetUpdate,
  petId: number
): Promise<Pet> => {
  //   const updatedPet = await petRepository.update(petId, payload);
  const findPet: Pet | null = await petRepository.findOne({
    where: {
      id: petId,
    },
  });

  const updated = await petRepository.save({ ...findPet, ...payload });

  return updated;
};

export const deletePetService = async (petId: number): Promise<void> => {
  const pet: Pet | null = await petRepository.findOneBy({ id: petId });

  await petRepository.remove(pet!);
};
