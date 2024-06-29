import { z } from "zod";

const shelterSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().email(),
  whatsApp: z.string().max(12),
  password: z.string().max(120),
});

const createShelterSchema = shelterSchema.omit({ id: true });
const readShelterSchema = shelterSchema.array();

export { shelterSchema, readShelterSchema, createShelterSchema };
