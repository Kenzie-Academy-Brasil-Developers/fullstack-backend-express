import { z } from "zod"

export const registerFormSchema = z.object({
    name: z.string(),
    email: z.string().email("Digite um e-mail válido."),
    password: z
    .string()
    .min(8, "A senha precisa conter pelo menos 8 caracteres."),
    confirm: z.string(),
}).refine(({
    password,
    confirm
}) => password === confirm, {
    message: "As senhas não correspondem.",
    path: ["confirm"],
})

export type RegisterForm = z.infer<typeof registerFormSchema>