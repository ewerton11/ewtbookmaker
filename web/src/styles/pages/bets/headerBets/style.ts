import styled from "styled-components"

export const Header = styled.header`
  width: 30%;
  height: 86%;
  border-right: 1px solid black;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ContainerSearch = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerInput = styled.div`
  width: 70%;
  height: 80%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputSearch = styled.input`
  width: 85%;
  height: 90%;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
`

export const ContainerBets = styled.div`
  width: 100%;
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
`

export const PreviewBets = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 5% 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
