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
width: 60vw;
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
`
export const Htwo = styled.h2`
width: 93vw;
font-size: 1.5em;
margin: 1.5vh auto;
display: flex;
justify-content: center;
font-family:'Nanum Gótico', sans-serif;
color: #52796f;
@media screen and (min-width: 360px) and (max-width: 800px) {
  width: 60vw;
  margin:1vh auto;
  font-size: 1.5em;
`

export const Main = styled.main`
  width:97vw;
  height:100vh;
  margin: 0 auto;
  display: flex;
  justify-content:space-evenly;
  flex-wrap: wrap;
  border:;
`
export const Div = styled.div`
  width:30vw;
  height:48vh;
  display:flex;
  align-intens:center;
  justify-content:center;
  flex-wrap: wrap;
  border:;
`