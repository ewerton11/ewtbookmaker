import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from "../../../lib/axios/axios"
import { ContainerRegister } from "../../../styles/pages/login/register/style"

import {
  Buttom,
  Container,
  ContainerInputPassword,
  ContainerInputUser,
  Input,
  Page,
} from "../../../styles/pages/login/style"

export interface User {
  user: string
  password: string
}

const schema = yup
  .object({
    user: yup.string().required("user obrigatorio"),
    password: yup.string().required("senha obrigatoria"),
  })
  .required()

export default function Register() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
  })

  // console.log(errors)

  async function createUser(user: User) {
    try {
      await api.post("/user", {
        name: `@${user.user}`,
        password: user.password,
      })

      await alert(
        "sua conta foi criada, você será redirecionado para a area de login"
      )

      router.push("/login")
    } catch {
      alert("Esse usuario ja existe")
    }
  }

  return (
    <>
      <Page>
        <Container onSubmit={handleSubmit(createUser)}>
          <ContainerRegister>
            <ContainerInputUser>
              <Input
                {...register("user")}
                type="text"
                minLength={3}
                maxLength={10}
                placeholder="crie seu user"
              />
            </ContainerInputUser>
            <ContainerInputPassword>
              <Input
                {...register("password")}
                type="password"
                minLength={3}
                placeholder="crie sua senha"
              />
            </ContainerInputPassword>
            <Buttom type="submit">confirmar</Buttom>
          </ContainerRegister>
        </Container>
      </Page>
    </>
  )
}
