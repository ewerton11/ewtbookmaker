import styled from "styled-components"

export const ContainerLogin = styled.div`
  width: 13%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const DivRegister = styled.div`
  width: 50%;
  height: 70%;
  cursor: pointer;
  transition: ease 0.3s;

  &:hover {
    color: #5286d3;
  }
`

export const Register = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
`

export const DivLogin = styled.div`
  width: 40%;
  height: 70%;
  background-color: rgb(77, 77, 255);
  border-radius: 5px;
  cursor: pointer;
  transition: ease 0.3s;

  &:hover {
    background-color: #5286d3;
  }
`

export const Login = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  color: white;
  font-weight: bold;
`
