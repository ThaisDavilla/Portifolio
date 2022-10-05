import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as S from "./Style/HeaderStyle";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";

export default function App() {
  return (
    <Router>
      <S.GlobalStyle />
      <S.Header>
        <S.Nav>
          <S.Ul>
            <S.Link href="/">
              <S.Li>Home</S.Li>
            </S.Link>
            <S.Link href="/About">
              <S.Li>About</S.Li>
            </S.Link>
            <S.Link href="/Work">
              <S.Li>Work</S.Li>
            </S.Link>
          </S.Ul>
        </S.Nav>
      </S.Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </Router>
  )
}