import { FormEvent, useState } from "react"
import Router from "next/router"

import { api } from "../../lib/axios/axios"
import NavBar from "../../components/navbar"

import {
  ButtomCreateBets,
  DivCreateBets,
  DivTop,
  FormCreateBets,
  InputCreateDescription,
  InputCreateTitle,
  InputCreateValue,
} from "../../styles/pages/createBets/style"

export default function CreateBets() {
  const [betsTitle, setBetsTitle] = useState("")
  const [betsValue, setBetsValue] = useState("")
  const [betsDescription, setBetsDescription] = useState("")

  async function formBets(event: FormEvent) {
    event.preventDefault()

    try {
      await api.post("/bets", {
        title: betsTitle,
        value: betsValue,
        description: betsDescription,
      })

      await alert("Aposta criada")
      await Router.push("/")
    } catch {
      alert("Error, tente novamente")
    }
  }

  return (
    <>
      <NavBar />
      <DivCreateBets>
        <FormCreateBets onSubmit={formBets}>
          <DivTop>
            <InputCreateTitle
              type="text"
              maxLength={20}
              minLength={2}
              placeholder="Titulo"
              onChange={(event) => setBetsTitle(event.target.value)}
            />
            <InputCreateValue
              type="text"
              maxLength={4}
              placeholder="Valor $"
              onChange={(event) => setBetsValue(event.target.value)}
            />
          </DivTop>
          <InputCreateDescription
            type="text"
            minLength={5}
            placeholder="Descriçao"
            onChange={(event) => setBetsDescription(event.target.value)}
          />
          <ButtomCreateBets type="submit">Criar</ButtomCreateBets>
        </FormCreateBets>
      </DivCreateBets>
    </>
  )
}
