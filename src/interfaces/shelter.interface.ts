import { z } from "zod";
import {
  createShelterSchema,
  readShelterSchema,
  returnShelterSchema,
} from "../schemas/shelter.schema";

type ShelterRequest = z.infer<typeof createShelterSchema>;
type ShelterRead = z.infer<typeof readShelterSchema>;
type ShelterReturn = z.infer<typeof returnShelterSchema>;

export { ShelterRead, ShelterRequest, ShelterReturn };
