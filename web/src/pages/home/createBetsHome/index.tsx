import Router from "next/router"

import {
  ButtomCreateBetsHome,
  DivCreateBetsHome,
} from "../../../styles/pages/home/createBetsHome/style"

export default function CreateBets() {
  return (
    <DivCreateBetsHome>
      <ButtomCreateBetsHome onClick={() => Router.push("createBets")}>
        Criar aposta
      </ButtomCreateBetsHome>
    </DivCreateBetsHome>
  )
}
