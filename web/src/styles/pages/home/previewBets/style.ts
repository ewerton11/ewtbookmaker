import styled from "styled-components"

export const ContainerPreviewBets = styled.div`
  width: 200px;
  height: 250px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 1.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`

export const TitlePreviewBets = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 0.5rem;
`

export const ValuePreview = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 0.7rem;
  color: red;
`

export const DescriptionPreview = styled.div`
  width: 100%;
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
