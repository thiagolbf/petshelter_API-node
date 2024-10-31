import { Request, Response } from "express";

import { createLoginService } from "../services/sessions.service";

export const createLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = await createLoginService(req.body);

  return res.status(201).json(token);
};
