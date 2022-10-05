import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
 }`;
export const Header = styled.header`
  display: flex;
  width: 100vw;
  height: 8vh;
  background-color:#f1faee;
  margin:0 auto;
  
  @media screen and (min-width: 360px) and (max-width: 700px) {
    width: 98%
  }`;

  export const Nav = styled.nav`
  display: flex;
  flex-direction: ;
  width: 50vw;
  margin: 0 auto;
  
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
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    font-size:1em;
}`