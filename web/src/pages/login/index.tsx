import { useState } from "react"
import { FormEvent } from "react"
import { useRouter } from "next/router"

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

export default function Login() {
  return (
    <Page>
      <Container>
        <Links>
          <Link href={"/login/register"}>Registra-se</Link>
        </Links>
        <ContainerConnect>
          <ContainerInputUser>
            <Input type="text" placeholder="Nome" />
          </ContainerInputUser>
          <ContainerInputPassword>
            <Input type="text" placeholder="senha" />
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
