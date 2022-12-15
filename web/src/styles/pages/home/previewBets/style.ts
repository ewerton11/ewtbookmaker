import styled from "styled-components"

export const ContainerPreviewBets = styled.div`
  width: 40%;
  height: 30%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 1.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`

export const ContainerTop = styled.div`
  width: 100%;
  height: 15%;
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const TitlePreviewBets = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 5%;
  display: flex;
  align-items: center;

  & h1 {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 600;
  }
`

export const ValuePreview = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & h2 {
    font-family: "Roboto", sans-serif;
    font-size: 0.8rem;
  }
`

export const ContainerDescription = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DescriptionPreview = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  overflow-y: auto;

  & p {
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`

export const PeopleBetting = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
`
export const ContainerImage = styled.div`
  margin-left: 5%;
  display: flex;
`
