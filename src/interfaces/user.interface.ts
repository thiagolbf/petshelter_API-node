import { z } from "zod";
import {
  createUserSchema,
  returnUserSchema,
  listPetUserSchema,
} from "../schemas/user.schema";

type UserRequest = z.infer<typeof createUserSchema>;
type UserReturn = z.infer<typeof returnUserSchema>;
type ListUserPets = z.infer<typeof listPetUserSchema>;

export { UserRequest, UserReturn, ListUserPets };
