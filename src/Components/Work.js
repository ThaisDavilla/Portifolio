import React from "react";
import * as S from "../Style/WorkStyle.js";
import Picture from "../Images/lol.jpg";
import PictureOne from "../Images/beat.jpg";
import PictureTwo from "../Images/portFlow.jpg";
import PictureTree from "../Images/bio.jpg";
import PictureFour from "../Images/blog.jpg";
import PictureFive from "../Images/ada.jpg";
import PictureSix from "../Images/ods.jpg";
import PictureSeven from "../Images/rick-and-morty.jpg";
import PictureEight from "../Images/adocao.jpg";

export default function Work() {
  return (
    <S.Body>
      <header>
        <S.Hone>FrontEnd Development</S.Hone>
        <S.Htwo>Conheça um pouco do meu trabalho</S.Htwo>
      </header>
      <S.Main>
        <S.Div>
          <S.Img src={Picture} alt="Imagem da página de login do jogo League Of Legend" />
          <S.Htree>Login Lague Of Legend</S.Htree>
          <S.Paragraph>Página interativa! Quando são preenchidos os campos acontece
            a ativação do botão. Efeito conseguido através da manipulação do DOM.</S.Paragraph>
          <S.Ancora href="https://thaisdavilla.github.io/leagueOfLegend/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Img src={PictureOne} alt="Imagem da página Beat, no compaço da batida" />
          <S.Htree>Beat, no compaço da batida</S.Htree>
          <S.Paragraph>Desing reproduzido do figma, visando a estruturação e estilização aplicando Flex-Box.</S.Paragraph>
          <S.Ancora href="https://thaisdavilla.github.io/beat/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Img src={PictureTwo} alt="Imagem da página PortFlow" />
          <S.Htree>PortiFlow - Imagine, Discuta, Desenhe.</S.Htree>
          <S.Paragraph>
            Reprodução do Figma aplicando recursos aprendidos do HTML5, CSS3, semântica
            e responsividade. Trabalho de conclusão do primeiro módulo do curso Vai na Web.
          </S.Paragraph>
          <S.Ancora href="https://thaisdavilla.github.io/portFlow/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Img src={PictureTree} alt="Imagem da Bio." />
          <S.Htree>Little Contact bio</S.Htree>
          <S.Paragraph>Fiz essa página para deixar o link como Bio nas minhas redes sociais.
            Foi um trabalho divertido de fazer em um mini curso para prática de HTML e CSS. 
          </S.Paragraph>
          <S.Ancora href="https://thaisdavilla.github.io/bioDevFrontEnd/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Img src={PictureFour} alt="Imagem do Blog." />
          <S.Htree>Litlle Blog ThaisDavilla </S.Htree>
          <S.Paragraph>Este foi meu primeiro contato prático com códigos.
            Esta página foi desenvolvida em uma oficina de 8h de um sábado.
            Foi neste dia que me apaixonei pelo FrontEnd.
          </S.Paragraph>
          <S.Ancora href="https://thaisdavilla.github.io/litlleBlogThaisDavilla/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Img src={PictureFive} alt="Imagem da página da Ada Lovelace." />
          <S.Htree>Site Ada Lovelace</S.Htree>
          <S.Paragraph>Fiz esta página num curso introdutório de programação.
            Além do HTML e do CSS tem um pouco de JavaScripit para interação do usuário.
          </S.Paragraph>
          <S.Ancora href="" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Img src={PictureSix} alt="Imagem da página sobre ODS." />
          <S.Htree>Objetivos de Desenvolvimento Sustetável</S.Htree>
          <S.Paragraph>Pesquisa sobre quais as medidas que a cidade de Mogi das Cruzes tem tomado para
            colaborar e atingir as metas acordadas com a ONU.
          </S.Paragraph>
          <S.Ancora href="https://ods-smoky.vercel.app/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Img src={PictureSeven} alt="Imagem da página da Ada Lovelace." />
          <S.Htree>Rick and Morty API</S.Htree>
          <S.Paragraph>Esse trabalho foi feito em grupo durante a aula para que pudéssemos 
            praticar o consumo e a estilização de API rest.
          </S.Paragraph>
          <S.Ancora href="https://rick-and-morty-black-ten.vercel.app/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Img src={PictureEight} alt="Imagem da página da Ada Lovelace." />
          <S.Htree>Adote um Amicão!</S.Htree>
          <S.Paragraph>Página para prática de consumo de API, simulando um site de adoção de cães.
            *Estilização e responsividade da página não estão construidas.*
          </S.Paragraph>
          <S.Ancora href="https://adote-api.vercel.app/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
      </S.Main>
    </S.Body>
  )
}