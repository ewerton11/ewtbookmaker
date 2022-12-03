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
  font-family: "Roboto", sans-serif;
  font-size: 0.5rem;
`

export const ValuePreview = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 0.5rem;
  color: red;
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
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  overflow-y: auto;

  & p {
    width: 150px;
    height: 100%;
    word-wrap: break-word;
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
