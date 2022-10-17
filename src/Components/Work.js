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


export default function Work() {
  return (
    <S.Body>
      <header>
        <S.Hone>FrontEnd Development</S.Hone>
        
        <S.Htwo>HTML 5 | CSS 3 | JavaScripit | DOM | React JS | Rest API | Git | GitHub</S.Htwo>
      </header>
      <S.Main>
        <S.Div>
          <S.Htree>Login League Of Legend</S.Htree>
          <S.Img src={Picture} alt="Imagem da página de login do jogo League Of Legend" />
          <S.Paragraph>Página interativa! Quando são preenchidos os campos acontece
            a ativação do botão. Efeito conseguido através da manipulação do DOM.</S.Paragraph>
          <S.Ancora href="https://thaisdavilla.github.io/leagueOfLegend/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Htree>Beat</S.Htree>
          <S.Img src={PictureOne} alt="Imagem da página Beat, no compaço da batida" />
          <S.Paragraph>Desing reproduzido do figma, visando a estruturação e estilização aplicando Flex-Box.</S.Paragraph>
          <S.Ancora href="https://thaisdavilla.github.io/beat/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Htree>PortiFlow</S.Htree>
          <S.Img src={PictureTwo} alt="Imagem da página PortFlow" />
          <S.Paragraph>
            Reprodução do Figma aplicando recursos aprendidos do HTML5, CSS3, semântica
            e responsividade. Trabalho de conclusão do primeiro módulo do curso Vai na Web.
          </S.Paragraph>
          <S.Ancora href="https://thaisdavilla.github.io/portFlow/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Htree>Contato</S.Htree>
          <S.Img src={PictureTree} alt="Imagem da Bio." />
          <S.Paragraph>Fiz essa página para deixar o link de contato na bio nas minhas redes sociais.
            Foi um trabalho divertido de fazer em um mini curso para prática de HTML e CSS.
          </S.Paragraph>
          <S.Ancora href="https://thaisdavilla.github.io/bioDevFrontEnd/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Htree>Blog Thais D'Ávilla </S.Htree>
          <S.Img src={PictureFour} alt="Imagem do Blog." />
          <S.Paragraph>Este foi meu primeiro contato prático com códigos.
            Esta página foi desenvolvida em uma oficina de 8h de um sábado.
            Foi neste dia que me apaixonei pelo FrontEnd.
          </S.Paragraph>
          <S.Ancora href="https://thaisdavilla.github.io/litlleBlogThaisDavilla/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Htree>Ada Lovelace</S.Htree>
          <S.Img src={PictureFive} alt="Imagem da página da Ada Lovelace." />
          <S.Paragraph>Esta página foi desenvolvida em um curso introdutório de programação.
            Além do HTML e do CSS também JavaScripit para interação do usuário nos campos de formulário.
          </S.Paragraph>
          <S.Ancora href="https://thaisdavilla.github.io/siteAdaLovelace/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Htree>ODS</S.Htree>
          <S.Img src={PictureSix} alt="Imagem da página sobre ODS." />
          <S.Paragraph>Pesquisa sobre quais as medidas que a cidade de Mogi das Cruzes tem tomado para
            colaborar e atingir as metas acordadas com a ONU.
          </S.Paragraph>
          <S.Ancora href="https://ods-smoky.vercel.app/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        <S.Div>
          <S.Htree>Rick and Morty API</S.Htree>
          <S.Img src={PictureSeven} alt="Imagem da página da Ada Lovelace." />
          <S.Paragraph>
            Consumo e estilização de API rest realizadas durante a aula. Foi um trabalho desenvolvido em grupo.
          </S.Paragraph>
          <S.Ancora href="https://rick-and-morty-black-ten.vercel.app/" target="_blank">Conheça a página!</S.Ancora>
        </S.Div>
        
      </S.Main>
    </S.Body>
  )
}