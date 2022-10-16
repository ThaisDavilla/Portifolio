import styled, { createGlobalStyle, keyframes } from "styled-components";

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
width: 60vw;
font-size: 2.5em;
margin: 0 auto;
display: flex;
justify-content: center;
font-family:'Nanum Gótico', sans-serif;
color: #52796f;
@media screen and (min-width: 360px) and (max-width: 800px) {
  width: 80vw;
  margin:0vh auto;
  font-size: 1.4em;
`
export const Htwo = styled.h2`
width: 90vw;
font-size: 1.5em;
margin: 2vh auto;
display: flex;
justify-content: center;
font-family:'Nanum Gótico', sans-serif;
color:#70a9a1;


@media screen and (min-width: 360px) and (max-width: 800px) {
  width: 90vw;
  margin:2vh auto;
  font-size: 1.2em;
`

export const Main = styled.main`
  width:97vw;
  height:100%;
  margin: 0 auto;
  color:#2f3e46;
  display: flex;
  justify-content:space-evenly;
  flex-wrap: wrap;
  border:;
  @media screen and (min-width: 360px) and (max-width: 800px){
    width:95vw;
  margin: 2vh auto;
  }
`
export const Div = styled.div`
  width:30vw;
  height:100%;
  margin:3vh;
  display:flex;
  align-intens:center;
  justify-content:center;
  flex-wrap: wrap;
  box-shadow: 4px 6px 5px  4px #40798c;
  background:#83c5be;
  border: solid 2px;
  transition: 1s all;
  &: hover{
    transform: scale(1.1);
    background: #e0e1dd;
    cursor:pointer;}
  @media screen and (min-width: 360px) and (max-width: 800px){
  width:90vw;
  margin:2vh;
  }
`
export const Img = styled.img`
width:100%;
height:30vh;
border: 1px solid #4a4e69;
@media screen and (min-width: 360px) and (max-width: 800px){
width:100%;
height:30vh;
}
`
export const Htree = styled.h3`
font-size:1.2em;
margin:1vh auto;
color:#003049;
@media screen and (min-width: 360px) and (max-width: 800px){
  font-size:1.1em;
}
`
export const Paragraph = styled.p`
font-size:1em;
width:60vh;
margin:1vh auto;
@media screen and (min-width: 360px) and (max-width: 800px){
  font-size:1em;
  width:40vh;
  margin:0.5vh auto;

}


`
export const Ancora = styled.a`
text-decoration:none;
color:#2f3e46;
`