import styled, { createGlobalStyle } from "styled-components";
import Front from "../Images/frontEnd.png";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  background-color:#f1faee;
}
`
export const Body = styled.body`
  `
export const Hone = styled.h1`
  width: 80vw;
  font-size: 3em;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  align-items:end;
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
  height:40vh;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  margin:2vh auto;
    @media screen and (min-width: 360px) and (max-width: 800px) {
  width:98vw;
  height:47vh;
  margin:2vh auto;
  
  }`

export const DivTwo = styled.div`
width:75vw;
height:45vh;
display:flex;
align-items:center;
justify-content:space-evenly;
margin:2vh auto;
  @media screen and (min-width: 360px) and (max-width: 800px) {
  width:98vw;
  height:51vh;
  margin:0 auto;
  }`

export const DivThree = styled.div`
width:75vw;
height:35vh;
display:flex;
align-items:center;
justify-content:space-evenly;
margin:0vh auto;
  @media screen and (min-width: 360px) and (max-width: 800px) {
  width:98vw;
  height:25vh;
  margin:0 auto;
  }`

export const DivFour = styled.div`
width:75vw;
height:30vh;
display:flex;
align-items:center;
justify-content:space-evenly;
margin:2vh auto;
 @media screen and (min-width: 360px) and (max-width: 800px) {
  width:98vw;
  height:20vh;
  margin:0 auto;
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
    display:none;
}`


