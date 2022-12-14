import { useContext } from "react"

import { AuthContext } from "./authContext"
import Login from "../../pages/login"

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext)

  if (auth.data === null) {
    //nao autenticado

    return <Login />
  }

  return children
}
