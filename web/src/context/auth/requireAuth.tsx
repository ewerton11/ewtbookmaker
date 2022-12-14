import { useRouter } from "next/router"
import { useContext } from "react"
import { AuthContext } from "./authContext"

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext)
  const router = useRouter()

  if (!auth.data) {
    // router.push("/login")
  }

  return children
}
