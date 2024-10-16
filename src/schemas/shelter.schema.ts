import { z } from "zod";
import { addressSchema, createAddressSchema } from "./address.schema";

const shelterSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().email(),
  whatsApp: z.string().max(12),
  password: z.string().max(120),
});

const createShelterSchema = shelterSchema
  .omit({ id: true })
  .extend({ address: createAddressSchema });

const returnShelterSchema = shelterSchema
  .omit({ password: true })
  .extend({ address: addressSchema });

const readShelterSchema = returnShelterSchema
  .extend({ address: addressSchema.optional().nullable() })
  .array();

export {
  shelterSchema,
  readShelterSchema,
  createShelterSchema,
  returnShelterSchema,
};
