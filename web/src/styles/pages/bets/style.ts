import styled from "styled-components"

export const DivContainer = styled.div`
  width: 100%;
  height: 93%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainBets = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
`

export const ContainerBets = styled.div`
  width: 40%;
  height: 95%;
  border: 1px solid black;
  margin: 3% 5%;
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
`

export const BetMaker = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const MainBet = styled.div`
  width: 80%;
  height: 80%;
  border: 1px solid black;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    width: 80%;
    height: 80%;
    word-wrap: break-word;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    overflow-y: auto;
  }
`

export const SubBets = styled.div`
  width: 100%;
  height: 65%;
  overflow-x: hidden;
  overflow-y: scroll;
`

export const Against = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: end;
  align-items: center;
`

export const AgainstBet = styled.div`
  width: 60%;
  height: 70%;
  border: 1px solid black;
  margin-right: 5%;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    color: red;
  }
`

export const ToAgree = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
`

export const ToAgreeBet = styled.div`
  width: 60%;
  height: 70%;
  border: 1px solid black;
  margin-left: 5%;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
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
