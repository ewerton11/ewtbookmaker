import styled from "styled-components"

export const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.form`
  width: 500px;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const ContainerConnect = styled.div`
  width: 90%;
  height: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerInputUser = styled.div`
  width: 90%;
  height: 10%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 90%;
  height: 90%;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
`

export const ContainerInputPassword = styled.div`
  width: 90%;
  height: 10%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Buttom = styled.button`
  width: 90%;
  height: 13%;
  border-radius: 15px;
  background-color: blue;
  position: absolute;
  bottom: 20%;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  color: white;
  transition: ease 0.3s;

  &:hover {
    background-color: rgb(77, 77, 255);
  }
`

export const ContainerLinks = styled.div`
  width: 100%;
  height: 15%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Links = styled.p`
  margin: 0px 2.5% 0px 2.5%;

  & a {
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    color: blue;
    transition: ease-in 0.2s;
  }

  & a:hover {
    color: rgb(77, 77, 255);
  }
`
