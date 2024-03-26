/* import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import { Header } from "../../components/Header/index"
import "react-toastify/dist/ReactToastify.css"
import { StyledButton, StyledDiv, StyledForm, StyledFormSection, StyledRegisterPageContainer } from "./style"
import { Input } from "./../../components/Input/index"
import { Footer } from "./../../components/Footer/index"
import { Link } from "react-router-dom"
import { registerFormSchema } from "../../schema/RegisterSchema"
import registerClient from "../../providers/RegisterContext"
import { ParagraphBold, Title1 } from "../../styles/Typography" */


export const RegisterPage = () => {

  /* const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      await registerClient(formData);
      reset();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <StyledRegisterPageContainer>
      <Header/>
      <StyledDiv>
          <ParagraphBold className="back-text"> <img  alt="" /><Link className="link-text" to={"/"}> voltar</Link></ParagraphBold>
      </StyledDiv>

      <StyledFormSection>
      <Title1 font="var(--color-blue)">Cadastrar-se</Title1>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {<Input type="text" {...register("name")} placeholder="Nome" error={errors.name} />

          <Input type="email" {...register("email")} placeholder="E-mail" error={errors.email}/>

          <Input type="password" {...register("password")} placeholder="Senha 8 caracteres, letra maiúscula, minuscula, um número, e um caracter especial" error={errors.password}/>

          <Input type="password" {...register("confirm")} placeholder="Confirmar senha" error={errors.confirm}/>
         }
          <StyledButton type="submit">Cadastrar-se</StyledButton>
        </StyledForm>
      </StyledFormSection>
      <Footer position="unset"/>
    </StyledRegisterPageContainer>
  ) */
}
{/* fix this page later on */}