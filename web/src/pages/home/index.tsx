import NavBar from "../../components/navbar"
import { Div, Main } from "../../styles/pages/home/style"
import CreateBets from "./createBetsHome"
import PreviewBets from "./previewBets"

export default function Home() {
  return (
    <>
      <NavBar />
      <Div>
        <CreateBets />
        <Main>
          <PreviewBets />
          <PreviewBets />
          <PreviewBets />
          <PreviewBets />
          <PreviewBets />
          <PreviewBets />
          <PreviewBets />
          <PreviewBets />
          <PreviewBets />
          <PreviewBets />
          <PreviewBets />
          <PreviewBets />
          <PreviewBets />
        </Main>
      </Div>
    </>
  )
}
