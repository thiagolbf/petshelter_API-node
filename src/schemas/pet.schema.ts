import { z } from "zod";

import { returnShelterSchema } from "../schemas/shelter.schema";

const petSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(90),
  type: z.enum(["cachorro", "gato"]),
  gender: z.enum(["macho", "femea"]),
  adopted: z.boolean().default(false),
  castrated: z.boolean().default(false),
  bio: z.string().default("no content"),
  shelterId: z.number(),
  createdAt: z.date(),
  updateAt: z.date(),
});

const readPetSchema = petSchema
  .extend({ shelter: returnShelterSchema })
  .array();

const createPetSchema = petSchema.omit({
  id: true,
  createdAt: true,
  updateAt: true,
});

const listPet = petSchema.omit({ createdAt: true, updateAt: true });

const updatePetSchema = petSchema.omit({ createdAt: true, updateAt: true });

export { petSchema, readPetSchema, createPetSchema, updatePetSchema, listPet };
