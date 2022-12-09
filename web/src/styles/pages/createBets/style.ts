import styled from "styled-components"

export const DivCreateBets = styled.div`
  width: 100%;
  height: 93%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerForm = styled.div`
  width: 50%;
  height: 90%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormCreateBets = styled.form`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DivTop = styled.div`
  width: 100%;
  height: 15%;
  margin-top: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DivTitle = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
`

export const ContainerTitle = styled.div`
  width: 100%;
  height: 70%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputCreateTitle = styled.input`
  width: 85%;
  height: 90%;
  background-color: white;
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
`

export const SpanTitle = styled.span`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  text-align: center;
  color: red;
`

export const DivValue = styled.div`
  width: 35%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: end;
`

export const ContainerValue = styled.div`
  width: 100%;
  height: 70%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputCreateValue = styled.input`
  width: 80%;
  height: 80%;
  background-color: white;
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
`

export const SpanValue = styled.span`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  text-align: center;
  color: red;
`

export const DivDescription = styled.div`
  width: 100%;
  height: 20%;
  position: relative;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ContainerDescription = styled.div`
  width: 100%;
  height: 60%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputCreateDescription = styled.input`
  width: 85%;
  height: 90%;
  background-color: white;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
`

export const SpanDescription = styled.span`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  text-align: center;
  color: red;
`

export const ButtomCreateBets = styled.button`
  width: 100%;
  height: 10%;
  background-color: rgb(77, 77, 255);
  border-radius: 15px;
  margin-top: 10%;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  transition: ease 0.3s;

  &:hover {
    background-color: #5286d3;
  }
`
