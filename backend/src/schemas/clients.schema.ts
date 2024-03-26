import { z } from "zod";

export const clientSchema = z.object({
    id: z.string(),
    name: z.string().max(150),
    email: z.string().email().max(150),
    password: z.string().min(6).max(150),
    admin: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  })

  export const createClientSchema = clientSchema.pick({
    name: true,
    email: true,
    password: true,
    admin: true
  })

  export const clientWithoutAdmin = createClientSchema.omit({admin: true})
  export const updateClientSchema = clientWithoutAdmin.partial()

  export const clientReturnSchema = clientSchema.partial().omit({ password: true });

  export const clientLoginSchema = clientSchema.pick({
    email: true,
    password: true
  })
 
  export const clientReturnListSchema = clientReturnSchema.array()
  export const clientReadSchema = clientReturnSchema.array()