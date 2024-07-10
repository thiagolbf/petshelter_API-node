import { Request, Response } from "express";
import { createUserService } from "../services/user.service";
import { UserReturn } from "../interfaces/user.interface";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: UserReturn = await createUserService(req.body);

  return res.status(201).json(user);
};