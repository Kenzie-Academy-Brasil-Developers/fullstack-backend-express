import { NextFunction, Request, Response } from "express";
import { contactRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";
import Contact from "../entities/Contacts.entity";


const verifyContactExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const contact: Contact | null = await contactRepo.findOneBy({
    id: id,
  });

  if (!contact) throw new AppError("Contact not found", 404);

  res.locals = { ...res.locals, contact };

  return next();
};

export { verifyContactExists };
