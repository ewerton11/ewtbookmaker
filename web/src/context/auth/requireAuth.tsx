import { useContext } from "react"
import { AuthContext } from "./authContext"
import Login from "../../pages/login"

interface Props {
  children: JSX.Element
}

export const RequireAuth = ({ children }: Props) => {
  const auth = useContext(AuthContext)

  if (auth.data === null) {
    //nao autenticado

    return <Login />
  }

  return children
}
