import { z } from "zod";
import {
  createShelterSchema,
  readShelterSchema,
} from "../schemas/shelter.schema";

type ShelterRequest = z.infer<typeof createShelterSchema>;
type ShelterRead = z.infer<typeof readShelterSchema>;

export { ShelterRead, ShelterRequest };
