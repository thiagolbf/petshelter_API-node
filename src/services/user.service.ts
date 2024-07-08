import { UserRequest, UserReturn } from "../interfaces/user.interface";
import { User } from "../entities/user.entity.ts";
import { returnUserSchema } from "../schemas/user.schema";
import userRepository from "../repositories/user.repository";

export const createUserService = async (
  payload: UserRequest
): Promise<UserReturn> => {
  const user: User = userRepository.create(payload);

  await userRepository.save(user);

  return returnUserSchema.parse(user);
};
