import { z } from "zod";

import { returnShelterSchema, shelterSchema } from "../schemas/shelter.schema";
import shelterRepository from "../repositories/shelter.repository";
import { addressSchema } from "./address.schema";
import { userSchema } from "./user.schema";

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

// const readAdpoptedPetsSchema = userSchema.omit({
//   email: true,
//   cpf: true,
//   password: true,
// });

const readPetSchema = petSchema
  .omit({
    shelterId: true,
  })
  .extend({
    shelter: shelterSchema
      .omit({
        password: true,
      })
      .optional()
      .nullable(),
  })
  .extend({ address: addressSchema.optional().nullable() })
  .array();

const createPetSchema = petSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const createdPet = petSchema.omit({
  shelterId: true,
});

const listPet = petSchema.omit({ createdAt: true, updatedAt: true });

const updatePetSchema = petSchema
  .omit({ createdAt: true, updatedAt: true })
  .partial()
  .strict();

export {
  petSchema,
  readPetSchema,
  createPetSchema,
  updatePetSchema,
  listPet,
  createdPet,
};
