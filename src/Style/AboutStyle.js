import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  background-color:#f1faee;
  }`
  
  
export const Hone = styled.h1`
  width: 80vw;
  font-size: 2em;
  height: 10vh;
  margin: 7vh auto;
  display: flex;
  align-items:end;
  justify-content: center;
  font-family:'Nanum Gótico', sans-serif;
  color: #52796f;
  text-transform: uppercase;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    width: 80vw;
    height: 5vh;
    margin: 8vh auto;
    font-size: 1.2em;
  }`
  export const Section = styled.section`
  width:80%;
  height:100%;
  margin:-4vh auto;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    width:98%;
    
    
  
  }`

export const DivOne = styled.div`
  width:75vw;
  height:40vh;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  margin:2vh auto;
  @media screen and (min-width: 360px) and (max-width: 800px) {
  width:92vw;
  height:100%;
  margin:1.5vh auto;
  flex-direction:column;
  }`

export const DivTwo = styled.div`
width:75vw;
height:45vh;
display:flex;
align-items:center;
justify-content:space-evenly;
margin:2vh auto;
  @media screen and (min-width: 360px) and (max-width: 800px) {
  width:92vw;
  height:100%;
  margin:0.5vh auto;
  flex-direction:column-reverse;
  }`

export const DivThree = styled.div`
width:75vw;
height:35vh;
display:flex;
align-items:center;
justify-content:space-evenly;
margin:0vh auto;
  @media screen and (min-width: 360px) and (max-width: 800px) {
  width:92vw;
  height:100%;
  margin:0.5vh auto;
  flex-direction:column;
  }`

export const DivFour = styled.div`
width:75vw;
height:30vh;
display:flex;
align-items:center;
justify-content:space-evenly;
margin:2vh auto;
 @media screen and (min-width: 360px) and (max-width: 800px) {
  width:92vw;
  height:100%;
  margin:0 auto;
  flex-direction:column-reverse;
  }`


export const Paragraph = styled.p`
  width:40vw;
  font-size:1.45em;
  font-family:'PT Sans', sans-serif;
  word-spacing:2px;
  line-height:33px;
  color:#2f3e46;
    @media screen and (min-width: 360px) and (max-width: 800px) {
    width:80%;
    font-size:1.3em;
    line-height:28px;
    
  }`

export const Img = styled.img`
  height:35vh;
  @media screen and (min-width: 360px) and (max-width: 800px) {
    margin:2vh;
    height:18vh;
}`


