import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import Contact from "../entities/Contacts.entity";
import { contactReturnSchema, createContactSchema } from "../schemas/contacts.schema";

export type ContactCreate = z.infer<typeof createContactSchema>;
export type ContactBodyUpdate = Omit<ContactCreate, "admin">;
export type ContactUpdate = DeepPartial<ContactBodyUpdate>;
export type ContactReturn = z.infer<typeof contactReturnSchema>;
export type ContactReadReturn = ContactReturn[];

export type ContactRepo = Repository<Contact>;