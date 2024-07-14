import { z } from "zod";
import { createAddressSchema } from "../schemas/address.schema";

type AddressRequest = z.infer<typeof createAddressSchema>;

export { AddressRequest };
