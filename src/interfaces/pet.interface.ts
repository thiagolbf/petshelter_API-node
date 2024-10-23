import { z } from "zod";
import {
  createdPet,
  createPetSchema,
  readPetSchema,
  updatePetSchema,
} from "../schemas/pet.schema";
import { Pet } from "../entities/pet.entity";
import { DeepPartial } from "typeorm";

type PetRequest = z.infer<typeof createPetSchema>;
type PetCreated = z.infer<typeof createdPet>;
type PetRead = z.infer<typeof readPetSchema>;
type PetUpdate = DeepPartial<Pet>;

export { PetRequest, PetRead, PetUpdate, PetCreated };
