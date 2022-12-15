import { useContext } from "react"
import Link from "next/link"
import Image from "next/image"

import NavLogin from "./navLogin"
import { AuthContext } from "../../context/auth/authContext"
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
  const auth = useContext(AuthContext)

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
          {auth.data === null ? (
            ""
          ) : (
            <Li>
              <Link href="/myBets">Suas apostas</Link>
            </Li>
          )}
        </ContainerUl>
        <NavLogin />
        {auth.data === null ? (
          ""
        ) : (
          <ContainerProfile>
            <DivProfile>
              <Link href="/profile">Perfil</Link>
              <Image src={Profile} width={25} alt="Imagem de perfil" />
            </DivProfile>
          </ContainerProfile>
        )}
      </ContainerTop>
    </Nav>
  )
}
