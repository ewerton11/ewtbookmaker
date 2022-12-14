import { useRouter } from "next/router"
import { createContext, useEffect, useState } from "react"

import { api } from "../../lib/axios/axios"

interface Data {
  name: string
  password: string
  token: string
}

type AuthContext = {
  data: Data
  signin: (name: string, password: string) => boolean
}

export const AuthContext = createContext<AuthContext>(null!)

export const AuthProviders = ({ children }: { children: JSX.Element }) => {
  const router = useRouter()
  const [data, setData] = useState<Data | null>(null)

  const signin = async (name: string, password: string) => {
    const { data } = await api.post("/auth", { name, password })

    if (data.name) {
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", data.name)
      setData(data)
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
