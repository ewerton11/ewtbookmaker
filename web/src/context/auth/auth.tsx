import { createContext, useState } from "react"
import { api } from "../../lib/axios/axios"

interface Data {
  name: string
  token: string
}

const AuthContext = createContext(null)

export const AuthProviders = ({ childres }: { childres: JSX.Element }) => {
  const [data, setData] = useState<String | null>(null)

  const signin = async (name: string, password: string) => {
    const data: Data = await api.get(`/user:${name}:${password}`)

    if (data.name === name) {
      setData(data.name)
      return true
    }

    return false
  }

  return <AuthContext.Provider value={signin}>{childres}</AuthContext.Provider>
}
