import { z } from "zod";

export const sessionSchema = z.object({
  email: z.string().email(),
  password: z.string().max(120),
});
