import { z } from "zod";

import { returnShelterSchema } from "../schemas/shelter.schema";
import shelterRepository from "../repositories/shelter.repository";

const petSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(90),
  type: z.enum(["cachorro", "gato"]),
  gender: z.enum(["macho", "femea"]),
  adopted: z.boolean().default(false),
  castrated: z.boolean().default(false),
  bio: z.string().default("no content"),
  shelterId: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

// const readPetSchema = petSchema
// .extend({ shelter: returnShelterSchema })
// .array();

const readPetSchema = petSchema
  .omit({
    shelterId: true,
  })
  .array();

const createPetSchema = petSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const listPet = petSchema.omit({ createdAt: true, updatedAt: true });

const updatePetSchema = petSchema.omit({ createdAt: true, updatedAt: true });

export { petSchema, readPetSchema, createPetSchema, updatePetSchema, listPet };
