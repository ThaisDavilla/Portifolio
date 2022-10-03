import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  
}`;
export const Header = styled.header`
  display: flex;
  width: 70vw;
  height: 15vh;
  margin:0 auto;
  
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    width: 98%
  }`;

  export const Nav = styled.nav`
  justify-content: ;
  align-items: ;
  display: flex;
  flex-direction: ;
  width: 70vw;
  margin: 0 auto;
  height: ;
  margin-top: ;
  margin-right: ;
  
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: center;
    margin-left: ;
    position: ;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ;
  list-style: none;
  width: 60vw;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    display: flex;
    width: 100%;
   justify-content: space-around;
  }
`;


export const Link = styled.a`
  
    text-decoration: none;
  }`;
  export const Li = styled.li`
  list-style: none;
  text-decoration: none;
  `