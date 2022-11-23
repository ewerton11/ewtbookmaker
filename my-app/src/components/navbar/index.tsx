import Link from "next/link"
import { ContainerProfile, ContainerUl, Div, Li, Nav } from "./style"

export default function NavBar() {
  return (
    <Nav>
      <ContainerUl>
        <Li>
          <Link href="/home">Home</Link>
        </Li>
        <Li>
          <Link href="/bets">Apostas</Link>
        </Li>
        <Li>
          <Link href="/myBets">Suas apostas</Link>
        </Li>
      </ContainerUl>
      <ContainerProfile>
        <Div>
          <Link href="/profile">Perfil</Link>
        </Div>
      </ContainerProfile>
    </Nav>
  )
}
