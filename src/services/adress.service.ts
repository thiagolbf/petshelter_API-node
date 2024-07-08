import { AdressRequest } from "../interfaces/adress.interface";
import { Adress } from "../entities/adress.entity";
import adressRepository from "../repositories/adress.repository";

export const createAdressService = async (
  payload: AdressRequest
): Promise<Adress> => {
  const adress: Adress = adressRepository.create(payload);

  await adressRepository.save(adress);

  return adress;
};
