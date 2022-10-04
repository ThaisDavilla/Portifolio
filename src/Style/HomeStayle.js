import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`
export const Body = styled.body`
  background-color: #f1faee;
  
`

export const Hone = styled.h1`
  width: 80vw;
  font-size: 3vw;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-family:'Nanum Gótico', sans-serif;
  color: #52796f;
  border:;
`
export const ImgProfile = styled.img`
  width:98.79vw;
  height:68vh;
  object-fit:cover;
`
export const BoxIcons = styled.div`
  width:30vw;
  height:15vh;
  margin: 3vh auto;
  display: flex;
  justify-content: space-evenly;
  align-itens: flex-center;
  border: ;

`
export const Icons = styled.img`
width:3vw;
height:4vh;

`