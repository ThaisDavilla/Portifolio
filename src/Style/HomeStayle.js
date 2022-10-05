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
  width: 30vw;
  font-size: 2.5em;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-family:'Nanum Gótico', sans-serif;
  color: #52796f;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    width: 60vw;
    margin:1vh auto;
    font-size: 1.5em;
  }`
export const ImgProfile = styled.img`
  width:100vw;
  height:68vh;
  object-fit:cover;
  `
export const BoxIcons = styled.div`
  width:15vw;
  height:10vh;
  margin: 1.3vh auto;
  display: flex;
  justify-content: space-evenly;
  align-itens: flex-center;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    width:30vw;
    height:12vh;
    display: flex;
  justify-content: space-between;
  }
`
export const Icons = styled.img`
width:3vw;
height:4vh;
@media screen and (min-width: 360px) and (max-width: 800px) {
  width:5vw;
  height:3vh;
}`