import { z } from "zod";
import { createUserSchema, returnUserSchema } from "../schemas/user.schema";

type UserRequest = z.infer<typeof createUserSchema>;
type UserReturn = z.infer<typeof returnUserSchema>;

export { UserRequest, UserReturn };
