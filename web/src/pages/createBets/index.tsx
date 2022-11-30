import { FormEvent } from "react"
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
  return (
    <>
      <NavBar />
      <DivCreateBets>
        <FormCreateBets onSubmit={(event: FormEvent) => event.preventDefault()}>
          <DivTop>
            <InputCreateTitle type="text" placeholder="Titulo" />
            <InputCreateValue type="text" placeholder="Valor $" />
          </DivTop>
          <InputCreateDescription type="text" placeholder="Descriçao" />
          <ButtomCreateBets type="submit">Criar</ButtomCreateBets>
        </FormCreateBets>
      </DivCreateBets>
    </>
  )
}
