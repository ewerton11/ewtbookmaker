import styled from "styled-components"

export const ContainerLogin = styled.div`
  width: 100%;
  height: 40%;
  background-color: aliceblue;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: end;
  align-items: center;
`

export const DivRegister = styled.div`
  width: 5%;
  height: 90%;
  margin-right: 1%;
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
  width: 5%;
  height: 90%;
  margin-right: 1%;
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
