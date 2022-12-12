import { useState } from "react"
import { FormEvent } from "react"
import { useRouter } from "next/router"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from "../../lib/axios/axios"

import {
  Buttom,
  Container,
  ContainerConnect,
  ContainerInputPassword,
  ContainerInputUser,
  Input,
  Links,
  Page,
} from "../../styles/pages/login/style"
import Link from "next/link"
import { User } from "./register"

interface Body {
  token: string
  name: string
}

const schema = yup
  .object({
    user: yup.string().required("user obrigatorio"),
    password: yup.string().required("senha obrigatoria"),
  })
  .required()

export default function Login() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
  })

  async function connectUser(user: User) {
    try {
      await api.get(`/user/${user.user}/${user.password}`).then((response) => {
        const data: Body = response.data

        localStorage.setItem("user", data.name)
        localStorage.setItem("token", data.token)

        router.push("/")
        // console.log(data.token)
      })
    } catch {
      alert("user ou senha invalida")
    }
  }

  return (
    <Page>
      <Container onSubmit={handleSubmit(connectUser)}>
        <Links>
          <Link href={"/login/register"}>Registra-se</Link>
        </Links>
        <ContainerConnect>
          <ContainerInputUser>
            <Input {...register("user")} type="text" placeholder="Nome" />
          </ContainerInputUser>
          <ContainerInputPassword>
            <Input {...register("password")} type="text" placeholder="senha" />
          </ContainerInputPassword>
          <Buttom type="submit">confirmar</Buttom>
        </ContainerConnect>
        <Links>
          <Link href={"/"}>Voltar</Link>
        </Links>
      </Container>
    </Page>
  )
}
