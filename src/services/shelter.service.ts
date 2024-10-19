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
import addressRepository from "../repositories/address.repository";
import { Address } from "../entities/address.entity";

import { hash } from "bcryptjs";

export const createShelterService = async (
  payload: ShelterRequest
): Promise<ShelterReturn> => {
  const address: Address = addressRepository.create(payload.address);
  await addressRepository.save(address);

  const hashedPassword = await hash(payload.password, 10);

  const newShelter: Shelter = shelterRepository.create({
    name: payload.name,
    email: payload.email,
    whatsApp: payload.whatsApp,
    password: hashedPassword,
    address: address,
  });

  const savedShelter = await shelterRepository.save(newShelter);

  return returnShelterSchema.parse(savedShelter);
};

export const readeShelterService = async (): Promise<ShelterRead> => {
  // const shelters = await shelterRepository
  //   .createQueryBuilder("shelters")
  //   .leftJoin("shelter.address", "addresses")
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
    .createQueryBuilder("shelter")
    .leftJoinAndSelect("shelter.address", "address")
    .orderBy("shelter.id", "ASC")
    .getMany();

  return readShelterSchema.parse(shelters);
};

export const readPaginationShelterService = async (
  page: number
): Promise<ShelterRead> => {
  const pageSize = 5;

  const shelters = await shelterRepository
    .createQueryBuilder("shelter")
    .leftJoinAndSelect("shelter.address", "address")
    .orderBy("shelter.id", "ASC")
    .take(pageSize)
    .skip((page - 1) * pageSize)
    .getMany();

  return readShelterSchema.parse(shelters);
};
