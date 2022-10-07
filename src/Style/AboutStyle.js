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
  font-size: 3em;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-family:'Nanum Gótico', sans-serif;
  color: #52796f;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    width: 80vw;
    height: 5vh;
    font-size: 1.5em;
  }`

export const DivOne = styled.div`
  width:75vw;
  height:30vh;
  display:flex;
  justify-content:space-evenly;
  margin:2vh auto;
    @media screen and (min-width: 360px) and (max-width: 800px) {
  width:98vw;
  height:30vh;
  margin:1px auto;
  
  }`

export const DivTwo = styled.div`
width:75vw;
height:30vh;
display:flex;
justify-content:space-evenly;
margin:2vh auto;
@media screen and (min-width: 360px) and (max-width: 800px) {
  width:98vw;
  height:38vh;
  margin:2px auto;
 }`

export const DivThree = styled.div`
width:75vw;
height:45vh;
display:flex;
justify-content:space-evenly;
margin:2vh auto;
@media screen and (min-width: 360px) and (max-width: 800px) {
  width:98vw;
  height:55vh;
  margin:0 auto;
  
  }`

export const DivFour = styled.div`
width:75vw;
height:30vh;
display:flex;
justify-content:space-evenly;
margin:2vh auto;
@media screen and (min-width: 360px) and (max-width: 800px) {
  width:98vw;
  height:40vh;
  margin:0 auto;
  
  }`

export const DivFive = styled.div`
width:95vw;
height:20vh;
display:flex;
justify-content:space-around;
margin:0 auto;
@media screen and (min-width: 360px) and (max-width: 800px) {
  width:98vw;
  height:18vh;
  margin:0 auto;
  
  }`

export const Paragraph = styled.p`
  width:40vw;
  font-size:1.45em;
  font-family:'PT Sans', sans-serif;
  color:#2f3e46;
    @media screen and (min-width: 360px) and (max-width: 800px) {
    width:80%;
    font-size:1.3em;
    
  }`


export const ParagraphLast = styled.p`
  width:50vw;
  font-size:1.3em;
  font-family:'PT Sans', sans-serif;
  color:#2f3e46;
  margin:3vh auto;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    width:95%;
    margin:0 auto;
    }`

export const Img = styled.img`
  width:20vw;
  height:25vh;
  @media screen and (min-width: 360px) and (max-width: 800px) {
   display:none;
  }`


