import { z } from "zod";

export const contactSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(150),
  email: z.string().max(150),
  cellphone: z.string().max(30),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
  client: z.string().max(150),
});

export const createContactSchema = contactSchema.pick({
    name: true,
    email: true,
    cellphone: true,
    client: true,
  });

export const updateContactSchema = contactSchema.partial();
export const contactReturnSchema = contactSchema.partial();
export const contactReturnListSchema = contactReturnSchema.array();
export const contactReadSchema = contactReturnSchema.array();