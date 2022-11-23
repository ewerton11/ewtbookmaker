import styled from "styled-components"
import CapaLogo from "../assents/image/capaLogin.jpg"

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

export const Container = styled.div`
  width: 500px;
  height: 600px;
  background-color: #292929;
  border: 1px solid white;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerDiv = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const ContainerInputEmail = styled.div`
  width: 90%;
  height: 30%;
  background-color: white;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerInputUser = styled.div`
  width: 90%;
  height: 30%;
  background-color: white;
  border-radius: 50px;
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

export const Buttom = styled.button`
  width: 90%;
  height: 20%;
  border-radius: 50px;
  position: relative;
  margin-top: 10%;

  & a {
    width: 100%;
    height: 100%;
    background-color: blue;
    border-radius: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    color: white;
    transition: ease 0.3s;
  }

  & a:hover {
    background-color: rgb(77, 77, 255);
  }
`
