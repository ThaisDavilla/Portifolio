import React from "react";
import * as S from "../Style/WorkStyle.js";
import Picture from "../Images/lol.jpg";
import PictureOne from "../Images/beat.jpg";
import PictureTwo from "../Images/portFlow.jpg";
import PictureTree from "../Images/bio.jpg";
import PictureFour from "../Images/blog.jpg";
import PictureFive from "../Images/ada.jpg";

export default function Work() {
  return (
    <S.Body>
      <header>
        <S.Hone>FrontEnd Development</S.Hone>
        <S.Htwo>Habilidades Técnicas</S.Htwo>
        <S.Htree>HTML 5, CSS 3, Responsividade, JavaScripit, DOM, React, State, Styled Components,
          Props, Hooks, Rest API.
        </S.Htree>
      </header>
      <S.Main>
        <S.Div>
          <S.Img src={Picture} alt="Imagem da página de login do jogo League Of Legend" />
          <h3>Login Lague Of Legend</h3>
          <p>Trabalho manipulando o DOM para interação de login.</p>
          <a href="https://thaisdavilla.github.io/leagueOfLegend/" target="_blank">Clique aqui e conheça a página!</a>
        </S.Div>
        <S.Div>
          <S.Img src={PictureOne} alt="Imagem da página Beat, no compço da batida" />
          <h3>Beat, no compaço da batida</h3>
          <p>Praticando a aplicação de flexBox.</p>
          <a href="https://thaisdavilla.github.io/beat/" target="_blank">Clique aqui e conheça a página!</a>
        </S.Div>
        <S.Div>
          <S.Img src={PictureTwo} alt="Imagem da página PortFlow" />
          <h3>PortiFlow - Imagine, Discuta, Desenhe.</h3>
          <p>Design reproduzido do Figma.</p>
          <a href="https://thaisdavilla.github.io/portFlow/" target="_blank">Clique aqui e conheça a página!</a>
        </S.Div>
        <S.Div>
          <S.Img src={PictureTree} alt="Imagem da Bio." />
          <h3>Little Contact bio</h3>
          <p>Construção de uma mini bio para prática de HTML e CSS.</p>
          <a href="https://thaisdavilla.github.io/bioDevFrontEnd/" target="_blank">Clique aqui e conheça a página!</a>
        </S.Div>
        <S.Div>
          <S.Img src={PictureFour} alt="Imagem do Blog." />
          <h3>Litlle Blog ThaisDavilla </h3>
          <p>Este foi meu primeiro contato prático com códigos.
            Esta página foi desenvolvida em uma oficina de 8h de um sábado.
            Foi neste dia que me apaixonei pelo FrontEnd.
          </p>
          <a href="https://thaisdavilla.github.io/litlleBlogThaisDavilla/" target="_blank">Clique aqui e conheça a página!</a>
        </S.Div>
        <S.Div>
          <S.Img src={PictureFive} alt="Imagem da página da Ada Lovelace." />
          <h3>Site Ada Lovelace</h3>
          <p>Fiz esta página num curso introdutório de programação.
            Além do HTML e do CSS tem um pouco de JavaScripit para interação do usuário.
          </p>
          <a href="" target="_blank">Clique aqui e conheça a página!</a>
        </S.Div>
      </S.Main>
    </S.Body>
  )
}