import { Request, Response } from "express";
import { createAdressService } from "../services/adress.service";
import { Adress } from "../entities/adress.entity";

export const createAdressController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const adress: Adress = await createAdressService(req.body);

  return res.status(201).json(adress);
};
