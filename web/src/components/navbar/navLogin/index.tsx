import Link from "next/link"
import { useContext } from "react"

import { AuthContext } from "../../../context/auth/authContext"

import { ContainerLogin, DivLogin, DivRegister, Login, Register } from "./style"

export default function NavLogin() {
  const auth = useContext(AuthContext)

  return (
    <>
      {auth.data === null ? (
        <ContainerLogin>
          <DivRegister>
            <Register>
              <Link href={"/login/register"}>Registre-se</Link>
            </Register>
          </DivRegister>
          <DivLogin>
            <Link href={"/login"}>
              <Login>Login</Login>
            </Link>
          </DivLogin>
        </ContainerLogin>
      ) : (
        ""
      )}
    </>
  )
}
