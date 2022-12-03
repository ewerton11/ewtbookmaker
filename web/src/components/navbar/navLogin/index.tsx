import Link from "next/link"

import { ContainerLogin, DivLogin, DivRegister, Login, Register } from "./style"

export default function NavLogin() {
  return (
    <ContainerLogin>
      <DivRegister>
        <Register>Registre-se</Register>
      </DivRegister>
      <DivLogin>
        <Link href={"/login"}>
          <Login>Login</Login>
        </Link>
      </DivLogin>
    </ContainerLogin>
  )
}
