import { z } from "zod";
import {
  createPetSchema,
  readPetSchema,
  updatePetSchema,
} from "../schemas/pet.schema";
import { Pet } from "../entities/pet.entity";
import { DeepPartial } from "typeorm";

type PetRequest = z.infer<typeof createPetSchema>;
type PetRead = z.infer<typeof readPetSchema>;
type PetUpdate = DeepPartial<Pet>;

export { PetRequest, PetRead, PetUpdate };
