import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  background-color:#f1faee;
  }`;
export const Header = styled.header`
  display: flex;
  width: 98vw;
  height:8vh;
  margin:0 auto;
    @media screen and (min-width: 360px) and (max-width: 700px) {
    width: 98%
  }`;

export const Nav = styled.nav`
  display: flex;
  width: 50vw;
  margin: 1vh auto;
  
  @media screen and (min-width: 360px) and (max-width: 800px) {
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: center;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  width: 60vw;
  height: 100%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    display: flex;
    width: 100%;
   justify-content: space-between;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  }`;

export const Li = styled.li`
list-style: none;
  text-decoration: none;
  font-size:1.5em;
  font-family:'Nanum Gótico', sans-serif;
  color: #52796f;
  transition: 1s all;
  &: hover{
    cursor:pointer;
    text-shadow: 1px 1px 2px #0d1b2a;
    color:#14213d;
}
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    font-size:1em;
}`
export const Footer = styled.footer`
color:#b8c0ff;
width: 90vw;
 height: 5vh;
font-size:14px;
margin:0 auto;
display:flex;
justify-content: space-between;
align-items: center;
@media only screen and (min-width: 360px) and (max-width: 800px) {
  width: 90%;
  font-size:12px;
}`
