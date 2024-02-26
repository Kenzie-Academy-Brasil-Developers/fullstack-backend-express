import { clientRepo } from "../repositories";
import Client from "../entities/Clients.entity";
import { ClientCreate, ClientReadReturn, ClientReturn, ClientUpdate } from "../interfaces/clients.interface";
import { clientReturnListSchema, clientReturnSchema } from "../schemas/clients.schema";

export const createClientService = async (data: ClientCreate): Promise<ClientReturn> => {
    const client: Client = clientRepo.create(data)
  
    await clientRepo.save(client)
  
    return clientReturnSchema.parse(client)
  }


export const readAllClientService = async (): Promise<ClientReadReturn> => {
  const clients: Client[] = await clientRepo.find()
  
  return clientReturnListSchema.parse(clients)
}


export const updateClientService = async (data: ClientUpdate, client: Client): Promise<ClientReturn> => {
  const clientUpdate: Client = clientRepo.create({...client, ...data})

  await clientRepo.save(clientUpdate)

  return clientReturnSchema.parse(clientUpdate)
}

export const deleteClientService = async (client: Client): Promise<void> => {
  await clientRepo.softRemove(client)
}
