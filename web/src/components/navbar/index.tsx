import Link from "next/link"
import Image from "next/image"

import NavLogin from "./navLogin"

import Profile from "../../assets/image/profile.png"

import {
  ContainerProfile,
  ContainerTop,
  ContainerUl,
  DivProfile,
  Li,
  Nav,
} from "./style"

export default function NavBar() {
  return (
    <Nav>
      <ContainerTop>
        <ContainerUl>
          <Li>
            <Link href="/">Home</Link>
          </Li>
          <Li>
            <Link href="/bets">Apostas</Link>
          </Li>
          <Li>
            <Link href="/myBets">Suas apostas</Link>
          </Li>
        </ContainerUl>
        <ContainerProfile>
          <DivProfile>
            <Link href="/profile">Perfil</Link>
            <Image src={Profile} width={25} alt="Imagem de perfil" />
          </DivProfile>
        </ContainerProfile>
      </ContainerTop>

      <NavLogin />
    </Nav>
  )
}
