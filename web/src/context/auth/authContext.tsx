import { useRouter } from "next/router"
import { createContext, useEffect, useState } from "react"

import { api } from "../../lib/axios/axios"

interface Data {
  name: string
  password: string
  token: string
}

interface AuthContext {
  data: Data | null
  signin: (name: string, password: string) => Promise<boolean>
}

export const AuthContext = createContext<AuthContext>({
  data: null,
  signin: () => Promise.resolve(false),
} as AuthContext)

interface AuthProvidersProps {
  children: JSX.Element
}

export const AuthProviders = ({ children }: AuthProvidersProps) => {
  const router = useRouter()
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    const validate = async () => {
      const storageToken = localStorage.getItem("token")
      const storageUser = localStorage.getItem("user")

      if (storageToken && storageUser) {
        setData("authenticated")
      }
    }
    validate()
  }, [])

  const signin = async (name: string, password: string) => {
    const { data: authData } = await api.post("/auth", { name, password })

    if (authData.name) {
      localStorage.setItem("token", authData.token)
      localStorage.setItem("user", authData.name)
      setData(authData)
      router.push("/")
      return true
    }

    return false
  }

  return (
    <AuthContext.Provider value={{ data, signin }}>
      {children}
    </AuthContext.Provider>
  )
}
