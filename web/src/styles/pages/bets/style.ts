import styled from "styled-components"

export const DivContainer = styled.div`
  width: 70%;
  height: 86%;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainBets = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`

export const ContainerBets = styled.div`
  width: 70%;
  height: 90%;
  border: 1px solid black;
  margin: 3% 4%;
  display: flex;
  flex-direction: column;
`

export const ContainerTop = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 0.7rem;
`

export const TitleBets = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 5%;
  display: flex;
  align-items: center;

  & h1 {
    margin-left: 5%;
  }
`

export const ValueBets = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & h2 {
    color: red;
  }
`

export const BetMaker = styled.div`
  width: 100%;
  height: 20%;
  /* border-bottom: 1px solid black; */
  display: flex;
  justify-content: baseline;
  align-items: center;
`

export const MainBet = styled.div`
  width: 80%;
  height: 80%;
  margin-left: 2%;
  display: flex;
  align-items: center;

  & p {
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 1.3rem;
    overflow-y: auto;
  }
`

export const SubBets = styled.div`
  width: 100%;
  height: 65%;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    visibility: hidden;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(77, 77, 255);
    border-radius: 50px;
  }
`

export const Against = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: end;
  align-items: center;
`

export const AgainstBet = styled.div`
  width: 100%;
  height: 70%;
  margin-right: 2%;
  display: flex;
  justify-content: end;
  align-items: center;

  & p {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: end;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 1.1rem;
    color: red;
  }
`

export const ToAgree = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: end;
  align-items: center;
`

export const ToAgreeBet = styled.div`
  width: 100%;
  height: 70%;
  margin-right: 2%;
  display: flex;
  justify-content: end;
  align-items: center;

  & p {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: end;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 1.1rem;
    color: blue;
  }
`

export const DivBottom = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PeopleBets = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const ContainerImage = styled.div`
  margin-left: 5%;
  display: flex;
`

export const ContainerSelectBets = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const SelectAgainst = styled.button`
  width: 45%;
  height: 80%;
  border: 1px solid black;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  color: blue;
  cursor: pointer;
`

export const SelectToAgree = styled.button`
  width: 45%;
  height: 80%;
  border: 1px solid black;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  color: red;
  cursor: pointer;
`
