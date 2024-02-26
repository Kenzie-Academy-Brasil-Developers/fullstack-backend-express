import "dotenv/config";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { LoginReturn, ClientLogin } from "../interfaces/clients.interface";
import { clientRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";
import Client from "../entities/Clients.entity";

export const loginService = async (data: ClientLogin): Promise<LoginReturn> => {
  const { email } = data;
  const client: Client | null = await clientRepo.findOneBy({ email });

  if (!client) throw new AppError("Invalid credentials", 401);

  const comparePassword = await compare(data.password, client.password);

  if (!comparePassword) throw new AppError("Invalid credentials", 401);

  const token: string = sign(
    { email: client.email, admin: client.admin },
    process.env.SECRET_KEY!,
    { subject: client.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};
