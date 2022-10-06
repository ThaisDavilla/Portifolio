import React from "react";
import * as S from "../Style/WorkStyle.js";

export default function Work() {
  return (
    <S.Body>
      <header>
        <S.Hone>FrontEnd Development</S.Hone>
        <S.Htwo>HTML 5, CSS 3, Responsividade, JavaScripit, DOM, React, State, Styled Components,
          Props, Hooks, Rest API.
        </S.Htwo>
      </header>
      <S.Main>
        <S.Div>
          <video src="" controls></video>
          <h3>Login Lague Of Legend</h3>
          <p>Trabalho manipulando o DOM para interação de login.</p>
        </S.Div>
        <S.Div>
          <video src="" controls></video>
          <h3>Beat, no compaço da batida</h3>
          <p>Praticando a aplicação de flexBox.</p>
        </S.Div>
        <S.Div>
          <video src="" controls></video>
          <h3>PortiFlow - Imagine, Discuta, Desenhe.</h3>
          <p>Design reproduzido do Figma.</p>
        </S.Div>
        <S.Div>
          <video src="" controls></video>
          <h3>Little Contact bio</h3>
          <p>Construção de uma mini bio para prática de HTML e CSS.</p>
        </S.Div>
        <S.Div>
          <video src="" controls></video>
          <h3>Litlle Blog ThaisDavilla </h3>
          <p>Este foi meu primeiro contato prático com códigos.
            Esta página foi desenvolvida em uma oficina de 8h de um sábado.
            Foi neste dia que me apaixonei pelo FrontEnd.
          </p>
        </S.Div>
        <S.Div>
          <video src="" controls></video>
          <h3>Site Ada Lovelace</h3>
          <p>Fiz esta página num curso introdutório de programação.
          Além do HTML e do CSS tem um pouco de JavaScripit para interação do usuário.
          </p>
        </S.Div>
      </S.Main>
    </S.Body>
  )
}