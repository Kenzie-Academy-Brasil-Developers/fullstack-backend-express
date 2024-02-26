import Contact from "../entities/Contacts.entity";
import { createContactService, deleteContactService, readAllContactService, updateContactService } from "../services/contact.service"
import { Response, Request } from 'express';

export const createContactController = async (req: Request, res: Response):Promise<Response> => {
    const {sub} = res.locals.decoded
    const contact = await createContactService(req.body, sub)

    return res.status(201).json(contact)
}

export const readAllContactController = async (req:Request, res:Response):Promise<Response> => {
    const contacts = await readAllContactService()
    
    return res.status(200).json(contacts)
}

export const updateContactController = async (req:Request, res:Response):Promise<Response> => {
    const {found} = res.locals
    const newContact:Contact = await updateContactService(req.body, found)

    return res.status(200).json(newContact)
}

export const deleteContactController = async (req:Request, res:Response):Promise<Response> => {
    await deleteContactService(res.locals.found)

    return res.status(204).json()
}