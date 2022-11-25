import styled from "styled-components"

export const Nav = styled.nav`
  z-index: 2;
  width: 100%;
  height: 7%;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContainerUl = styled.ul`
  width: auto;
  height: 100%;
  margin-left: 3%;
  display: flex;
  align-items: center;
`

export const Li = styled.li`
  padding: 0px 1vw;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;

  & a {
    color: black;
    text-decoration: none;
  }
`

export const ContainerProfile = styled.div`
  width: auto;
  height: 100%;
  margin-right: 3%;
  display: flex;
  align-items: center;
`

export const Div = styled.div`
  padding: 0px 1vw;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;

  & a {
    color: black;
    text-decoration: none;
  }
`
