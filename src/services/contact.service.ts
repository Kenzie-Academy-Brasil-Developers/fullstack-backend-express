import Client from "../entities/Clients.entity";
import Contact from "../entities/Contacts.entity";
import { ContactCreate } from "../interfaces/contacts.interface";
import { clientRepo, contactRepo } from "../repositories";
import { createContactSchema } from "../schemas/contacts.schema";

export const createContactService = async (data: ContactCreate, clientId: string) => {
    const client: Client | null = await clientRepo.findOneBy({id:clientId})
    const contact: Contact = contactRepo.create({...data, client:client!})

    await clientRepo.save(contact)

    return createContactSchema.parse(contact)
}

export const readAllContactService = async()=>{
    const contact: Contact[] = await contactRepo.find()

    return contact
}

export const updateContactService = async(cliend:Contact, data: Partial<Contact>):Promise<Contact> => {
    return await contactRepo.save({...clientRepo, ...data})
}

export const deleteContactService = async(contact: Contact):Promise<void> => {
    await contactRepo.remove(contact)
}