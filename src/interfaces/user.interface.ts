import { z } from "zod";
import { createUserSchema } from "../schemas/user.schema";

type UserRequest = z.infer<typeof createUserSchema>;

export { createUserSchema };
