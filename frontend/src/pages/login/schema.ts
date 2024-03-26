import { z } from "zod"


export const schema = z.object({
    email: z.string().email("Somente email"),
    password: z.string().min(1)
})

export type LoginData = z.infer<typeof schema>