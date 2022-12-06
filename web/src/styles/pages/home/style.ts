import styled from "styled-components"

export const Div = styled.div`
  width: 100%;
  height: 86%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Main = styled.main`
  width: 90%;
  height: 80%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
    visibility: hidden;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(77, 77, 255);
    border-radius: 50px;
  }
`
