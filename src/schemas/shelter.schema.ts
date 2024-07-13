import { z } from "zod";
import { adressSchema } from "./adress.schema";

const shelterSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().email(),
  whatsApp: z.string().max(12),
  password: z.string().max(120),
});

const createShelterSchema = shelterSchema.omit({ id: true });
const returnShelterSchema = shelterSchema.omit({ password: true });
const readShelterSchema = returnShelterSchema
  .extend({ address: adressSchema.optional() })
  .array();

export {
  shelterSchema,
  readShelterSchema,
  createShelterSchema,
  returnShelterSchema,
};
