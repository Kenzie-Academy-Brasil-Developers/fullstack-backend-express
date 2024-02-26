import { AppDataSource } from "./data-source";
import Client from "./entities/Clients.entity";
import { ClientRepo } from "./interfaces/clients.interface";

export const clientRepo: ClientRepo = AppDataSource.getRepository(Client)