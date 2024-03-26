import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginData, schema } from "./schema.ts"
import { userAuth } from "../../hooks/useAuth.tsx"

export const LoginPage = () => {
    const { signIn } = userAuth()
    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(schema)
    })

    const submit = (data: LoginData) => {
        signIn(data)
    }
    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email"  {...register("email")} />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register("password")} />

                <button type="submit">Entrar</button>
            </form>
        </main>
    )
}
