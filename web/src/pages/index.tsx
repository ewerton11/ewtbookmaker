import NavBar from "../components/navbar"
import CreateBets from "./home/createBetsHome"
import PreviewBets from "./home/previewBets"

import { Div, Main } from "../styles/pages/home/style"

export default function Home() {
  return (
    <>
      <NavBar />
      <Div>
        <CreateBets />
        <Main>
          <PreviewBets />
        </Main>
      </Div>
    </>
  )
}
