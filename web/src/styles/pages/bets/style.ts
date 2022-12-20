import styled from "styled-components"

export const DivContainer = styled.div`
  width: 70%;
  height: 93%;
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
  align-items: center;
  flex-flow: row wrap;
`

export const ContainerBets = styled.div`
  width: 70%;
  height: 95%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
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
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: blue;
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
  width: 99%;
  height: 20%;
  margin-left: 1%;
  display: flex;
  justify-content: baseline;
  align-items: center;
`

export const DivMain = styled.div`
  width: auto;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  & p {
    position: absolute;
    bottom: 5%;
    left: 0;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.5);
  }
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
    overflow-y: hidden;
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
export const DivSubs = styled.div`
  width: auto;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  & p {
    position: absolute;
    bottom: 10%;
    right: 0;
    font-family: "Roboto", sans-serif;
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.5);
  }
`

export const Against = styled.div`
  width: 99%;
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
  width: 99%;
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
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  color: blue;
  cursor: pointer;
`

export const SelectAgainstDisabled = styled.button`
  width: 45%;
  height: 80%;
  border: 1px solid gray;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  color: gray;
  cursor: pointer;
`

export const SelectToAgree = styled.button`
  width: 45%;
  height: 80%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  color: red;
  cursor: pointer;
`

export const SelectToAgreeDisabled = styled.button`
  width: 45%;
  height: 80%;
  border: 1px solid gray;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  color: gray;
  cursor: pointer;
`

export const H1HeaderBets = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  color: black;
`
