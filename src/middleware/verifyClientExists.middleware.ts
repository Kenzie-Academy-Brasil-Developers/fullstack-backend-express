import { NextFunction, Request, Response } from "express";
import { clientRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";
import Client from "../entities/Clients.entity";


const verifyClientExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const client: Client | null = await clientRepo.findOneBy({
    id: Number(id),
  });

  if (!client) throw new AppError("Client not found", 404);

  res.locals = { ...res.locals, client };

  return next();
};

export { verifyClientExists };
