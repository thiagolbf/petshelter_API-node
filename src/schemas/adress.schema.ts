import { z } from "zod";

const adressSchema = z.object({
  id: z.number().positive(),
  street: z.string().max(45),
  zipcode: z.string().max(8),
  city: z.string().max(20),
  state: z.string().max(2),
});

const createAdressSchema = adressSchema.omit({ id: true });

export { adressSchema, createAdressSchema };
