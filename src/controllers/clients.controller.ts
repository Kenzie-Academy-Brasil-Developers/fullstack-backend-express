import { Request, Response } from "express";
import { ClientReturn } from "../interfaces/clients.interface";
import { createClientService, deleteClientService, readAllClientService, updateClientService } from "../services/clients.service";

export const createClientController = async (req: Request, res: Response): Promise<Response> => {
    const client: ClientReturn = await createClientService(req.body)
  
    return res.status(201).json(client)
  }

export const readAllClientsController = async (req: Request, res: Response): Promise<Response> => {
  const clients = await readAllClientService()
  return res.status(200).json(clients)
}

export const updateClientController = async (req: Request, res: Response): Promise<Response> => {
  const { Client } = res.locals
  console.log(Client)
  const newClient = await updateClientService(req.body, Client)
  return res.status(200).json(newClient)
}

export const deleteClientController = async (req: Request, res: Response): Promise<Response> => {
  const { client } = res.locals
  await deleteClientService(client)
  return res.status(204).json()
}