import Link from "next/link"
import { useState } from "react"
import { FormEvent } from "react"
import { Router, useRouter } from "next/router"

import { api } from "../lib/axios/axios"

import {
  Buttom,
  Container,
  ContainerInputUser,
  Input,
  Page,
} from "../styles/pages/login/style"

export default function Login() {
  const [userName, setUserName] = useState("")
  const router = useRouter()

  async function createUser(event: FormEvent) {
    event.preventDefault()

    try {
      await api.post("/user", {
        name: userName,
      })
      router.push("/home")
    } catch {
      alert("Esse usuario ja existe")
    }
  }

  return (
    <Page>
      <Container onSubmit={createUser}>
        <ContainerInputUser>
          <Input
            type="text"
            placeholder="Nome"
            onChange={(event) => setUserName(event.target.value)}
          />
        </ContainerInputUser>
        <Buttom type="submit">confirmar</Buttom>
      </Container>
    </Page>
  )
}
