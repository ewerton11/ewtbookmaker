import NavBar from "../../components/navbar"
import { Div } from "../../styles/pages/profile/style"
import { RequireAuth } from "../../context/auth/requireAuth"

export default function Profile() {
  return (
    <>
      <NavBar />
      <Div>
        <main>
          <h1>PERFIL</h1>
        </main>
      </Div>
    </>
  )
}
