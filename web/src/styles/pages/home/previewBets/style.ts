import styled from "styled-components"

export const ContainerPreviewBets = styled.div`
  min-width: 200px;
  min-height: 250px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 1.7%;
  flex-flow: wrap;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`

export const TitlePreviewBets = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 0.5rem;
`

export const DescriptionPreview = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  overflow-y: auto;

  & p {
    width: 150px;
    word-wrap: normal;
  }
`

export const PeopleBetting = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
`
export const ContainerImage = styled.div`
  margin-left: 5%;
  display: flex;
`
