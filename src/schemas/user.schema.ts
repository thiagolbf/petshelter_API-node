import { z } from "zod";
import { listPet } from "../schemas/pet.schema";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().email(),
  cpf: z.string().max(11),
  password: z.string().max(120),
});

const createUserSchema = userSchema.omit({ id: true });
const returnUserSchema = userSchema.omit({ password: true });
const listPetUserSchema = userSchema
  .omit({
    password: true,
    email: true,
    cpf: true,
  })
  .extend({
    pets: z.array(listPet.extend({ shelterId: z.string().optional() })),
  });

export { userSchema, createUserSchema, returnUserSchema, listPetUserSchema };
