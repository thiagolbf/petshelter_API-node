import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().email(),
  cpf: z.string().max(11),
  password: z.string().max(120),
});

const createUserSchema = userSchema.omit({ id: true });

export { userSchema, createUserSchema };
