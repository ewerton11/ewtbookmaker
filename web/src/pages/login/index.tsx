import { useContext, useState } from "react"
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
  ContainerLinks,
  Input,
  Links,
  Page,
} from "../../styles/pages/login/style"
import Link from "next/link"
import { User } from "./register"
import { AuthContext } from "../../context/auth/authContext"

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
  const auth = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
  })

  async function connectUser(user: User) {
    auth.signin(user.user, user.password)
    // console.log(user.user, user.password)
  }

  return (
    <Page>
      <Container onSubmit={handleSubmit(connectUser)}>
        <ContainerConnect>
          <ContainerInputUser>
            <Input {...register("user")} type="text" placeholder="Nome" />
          </ContainerInputUser>
          <ContainerInputPassword>
            <Input {...register("password")} type="text" placeholder="senha" />
          </ContainerInputPassword>
          <Buttom type="submit">confirmar</Buttom>
        </ContainerConnect>
        <ContainerLinks>
          <Links>
            <Link href={"/"}>Home</Link>
          </Links>
          <Links>
            <Link href={"/login/register"}>Registra-se</Link>
          </Links>
        </ContainerLinks>
      </Container>
    </Page>
  )
}
