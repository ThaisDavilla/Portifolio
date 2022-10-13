import React from "react";
import Front from "../Images/frontEnd.png";
import Hobbies from "../Images/hobbies.png";
import Books from "../Images/diploma.png"
import Talk from "../Images/conversar.png"
import * as S from "../Style/AboutStyle";

export default function About() {
  return (
    <S.Body>
      <S.GlobalStyle />
      <S.Hone>About Me</S.Hone>
      <section>
        <S.DivOne>
          <S.Paragraph>Desde março de 2022, através do curso técnico Vai na Web aprendi
            os conceitos básicos de FrontEnd, aprimorando os conhecimentos e
            aprendizados também com outras plataformas e escolas, nas quais
            os conceitos de softskills são tão difundidos, aprofundados e
            apreciados como as hardskills.
          </S.Paragraph>
          <S.Img src={Front} alt="Imagem de vários logotipos das linguagens usadas no desenvolvimento frontend." />
        </S.DivOne>
        <S.DivTwo>
          <S.Img src={Books} alt="Imagem de uma mulher sentada em cima de vários livros e com um livro aberto na mão." />
          <S.Paragraph>No momento, além dos cursos e mini ciursos de frontend, estou cursando o
            primeiro semestre de Engenharia da
            Computação pela Universidade Virtual do Estado de São Paulo.
            Paralelo a faculdade estou estudando Inglês através da IfSul e pelo
            app Busuu. Meus objetivos a curto prazo são chegar ao nível intermediário da língua
            inglesa e ser desenvolvedora FullStack.
          </S.Paragraph>
        </S.DivTwo>
        <S.DivThree>
          <S.Paragraph>Sou organizada, proativa, muito comunicativa, acolhedora e boa ouvinte.
            Gosto muito de fazer amizades, de ver um bom filme, ler livros, ouvir
            música boa, passear, viajar e comer.
          </S.Paragraph>
          <S.Img src={Hobbies} alt="" />
        </S.DivThree>

        <S.DivFour>
          <S.Img src={Talk} alt="Imagem de livros, um diploma e um capelo." />
          <S.Paragraph>Estou a disposição caso queira me conhecer melhor!
            Vamos bater um papo? Vou adorar! Meu e-mail é thaisdavilla@yahoo.com.br
          </S.Paragraph>

        </S.DivFour>

      </section>
    </S.Body>
  )
}