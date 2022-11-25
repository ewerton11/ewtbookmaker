import Link from "next/link"
import {
  Buttom,
  Container,
  ContainerDiv,
  ContainerInputEmail,
  ContainerInputUser,
  Input,
  Page,
} from "../styles/pages/login/style"

export default function Login() {
  return (
    <Page>
      <Container>
        <ContainerDiv>
          <ContainerInputEmail>
            <Input type="text" placeholder="E-mail" />
          </ContainerInputEmail>
          <ContainerInputUser>
            <Input type="text" placeholder="Nome" />
          </ContainerInputUser>
        </ContainerDiv>
        <Buttom>
          <Link href="/home">confirmar</Link>
        </Buttom>
      </Container>
    </Page>
  )
}
