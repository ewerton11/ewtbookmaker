import styled from "styled-components"

export const DivCreateBets = styled.div`
  width: 100%;
  height: 93%;
  /* background-color: #e5d9d9; */
  position: absolute;
  top: 7%;
  display: flex;
`

export const FormCreateBets = styled.form`
  width: 35%;
  height: 100%;
`

export const DivTop = styled.div`
  width: 100%;
  height: 10%;
  margin-top: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const InputCreateTitle = styled.input`
  width: 70%;
  height: 80%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-right: 1%;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
`

export const InputCreateValue = styled.input`
  width: 20%;
  height: 80%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
`

export const InputCreateDescription = styled.input`
  width: 95%;
  height: 15%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin: 5% 0px 0px 3%;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
`

export const ButtomCreateBets = styled.button`
  width: 95%;
  height: 10%;
  background-color: rgb(77, 77, 255);
  border-radius: 20px;
  margin: 5% 0px 0px 3%;
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  transition: ease 0.3s;

  &:hover {
    background-color: #5286d3;
  }
`
