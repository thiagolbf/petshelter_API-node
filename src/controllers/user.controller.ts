import { Request, Response } from "express";
import {
  createUserService,
  listUserPetService,
} from "../services/user.service";
import { UserReturn } from "../interfaces/user.interface";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: UserReturn = await createUserService(req.body);

  return res.status(201).json(user);
};

export const listUserPetController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log("entrou aqui");
  const userPet = await listUserPetService(res.locals.user);

  return res.status(200).json(userPet);
};
