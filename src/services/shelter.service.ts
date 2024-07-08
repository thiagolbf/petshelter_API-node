import {
  ShelterRequest,
  ShelterRead,
  ShelterReturn,
} from "../interfaces/shelter.interface";
import { Shelter } from "../entities/shelter.entity";
import {
  readShelterSchema,
  returnShelterSchema,
} from "../schemas/shelter.schema";
import shelterRepository from "../repositories/shelter.repository";

export const createShelterService = async (
  payload: ShelterRequest
): Promise<ShelterReturn> => {
  const shelter: Shelter = shelterRepository.create(payload);

  await shelterRepository.save(shelter);

  return returnShelterSchema.parse(shelter);
};

export const readeShelterService = async (): Promise<ShelterRead> => {
  // const shelters = await shelterRepository
  //   .createQueryBuilder('shelter')
  //   .leftJoin("shelter.address", "address")
  //   .select([
  //     "shelter.id",
  //     "shelter.name",
  //     "shelter.email",
  //     "shelter.whatsApp",
  //     "address.id",
  //     "address.street",
  //     "address.zipcode",
  //     "address.city",
  //     "address.state",
  //   ])
  //   .getMany();

  const shelters = await shelterRepository
    .createQueryBuilder("shelters")
    .leftJoin("shelter.adress", "addresses")
    .getMany();

  return readShelterSchema.parse(shelters);
};
