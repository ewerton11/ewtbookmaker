import styled from "styled-components"
import CapaLogo from "../../../assets/image/capaLogin.jpg"

export const Page = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${CapaLogo.src});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.form`
  width: 500px;
  height: 600px;
  background-color: #292929;
  border: 1px solid white;
  border-radius: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Links = styled.p`
  & a {
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    color: white;
    transition: ease-in 0.2s;
  }

  & a:hover {
    color: rgb(77, 77, 255);
  }
`

export const ContainerConnect = styled.div`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ContainerInputUser = styled.div`
  width: 90%;
  height: 20%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 90%;
  height: 90%;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
`

export const ContainerInputPassword = styled.div`
  width: 90%;
  height: 20%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Buttom = styled.button`
  width: 90%;
  height: 25%;
  border-radius: 50px;
  background-color: blue;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  color: white;
  transition: ease 0.3s;

  &:hover {
    background-color: rgb(77, 77, 255);
  }
`
