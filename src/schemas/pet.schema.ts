import { z } from "zod";

import { shelterSchema } from "../schemas/shelter.schema";

const petSchema = z.object({
  id: z.number().positive(),
  animalType: z.enum(["cachorro", "gato"]),
  gender: z.enum(["male", "female"]),
  adopted: z.boolean().default(false),
  castrated: z.boolean().default(false),
  bio: z.string().default("no content"),
  createdAt: z.date(),
  updateAt: z.date(),
});

const readPetSchema = petSchema.extend({ shelter: shelterSchema }).array();

const createPetSchema = petSchema.omit({
  id: true,
  createdAt: true,
  updateAt: true,
});

const updatePetSchema = petSchema.omit({ createdAt: true, updateAt: true });

export { petSchema, readPetSchema, createPetSchema, updatePetSchema };