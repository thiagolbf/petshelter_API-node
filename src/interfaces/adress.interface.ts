import { z } from "zod";
import { createAdressSchema } from "../schemas/adress.schema";

type AdressRequest = z.infer<typeof createAdressSchema>;

export { AdressRequest };
