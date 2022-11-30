import { FormEvent, useState } from "react"

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
              placeholder="Titulo"
              onChange={(event) => setBetsTitle(event.target.value)}
            />
            <InputCreateValue
              type="text"
              placeholder="Valor $"
              onChange={(event) => setBetsValue(event.target.value)}
            />
          </DivTop>
          <InputCreateDescription
            type="text"
            placeholder="Descriçao"
            onChange={(event) => setBetsDescription(event.target.value)}
          />
          <ButtomCreateBets type="submit">Criar</ButtomCreateBets>
        </FormCreateBets>
      </DivCreateBets>
    </>
  )
}
