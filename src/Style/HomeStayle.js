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
margin:10vh auto;

`

export const Hone = styled.h1`
  width: 60vw;
  font-size: 2.5em;
  margin: 0.5vh auto;
  display: flex;
  justify-content: center;
  font-family:'Nanum Gótico', sans-serif;
  color: #52796f;
  text-transform: uppercase;

  @media screen and (min-width: 360px) and (max-width: 800px) {
    width: 60vw;
    margin:1vh auto;
    font-size: 1.5em;
  }`
export const ImgProfile = styled.img`
  width:100%;
  height:65vh;
  object-fit:cover;
`
export const BoxIcons = styled.div`
  width:15vw;
  height:100%;
  margin: 1.5vh auto;
  display: flex;
  justify-content: space-evenly;
  align-itens: flex-center;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    width:30vw;
    height:5vh;
    display: flex;
  justify-content: space-evenly;
  }
`
export const Icons = styled.img`
height:4vh;
@media screen and (min-width: 360px) and (max-width: 800px) {
  height:3vh;
}`