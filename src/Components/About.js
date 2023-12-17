import React from "react";
import Front from "../Images/frontEnd.png";
import Hobbies from "../Images/hobbies.png";
import Books from "../Images/diploma.png"
import Talk from "../Images/conversar.png"
import * as S from "../Style/AboutStyle";

export default function About() {
  return (
    <body>
      <S.GlobalStyle />
      <S.Hone>Um pouco sobre mim</S.Hone>
      <S.Section>
        <S.DivOne>
          <S.Paragraph>Em 2021 conheci o maravilhoso universo da tecnologia e me apaixonei!
            Desde então faço cursos e bootcamps de font end e FullStack, cursos de computação em nuvem
            e estudo um pouco de cada área, a fim de compreender cada vez mais e melhor como tudo funciona
            e como posso utilizar as ferramentas.
          </S.Paragraph>
          <S.Img src={Front} alt="Imagem de vários logotipos das linguagens usadas no desenvolvimento frontend." />
        </S.DivOne>
        <S.DivTwo>
          <S.Img src={Books} alt="Imagem de uma mulher sentada em cima de vários livros e com um livro aberto na mão." />
          <S.Paragraph>Atualmente estou no quarto período do curso de bacharelado em Engenharia da Computação, no qual
            aprofundo meus estudos e meus conhecimentos sobre as variadas linguagens de programação e outros assuntos relacionados.
            Paralela a faculdade também faço curso de Inglês, pois o entendimento desta língua facilita no aprendizado do mundo da tecnologia.
                
          </S.Paragraph>
        </S.DivTwo>
        <S.DivThree>
          <S.Paragraph>Sou organizada, comunicativa, acolhedora e boa ouvinte.
            Gosto muito de fazer amizades, de ver um bom filme, ler livros, ouvir
            música boa, passear, viajar e comer.
          </S.Paragraph>
          <S.Img src={Hobbies} alt="" />
        </S.DivThree>

        <S.DivFour>
          <S.Img src={Talk} alt="Imagem de livros, um diploma e um capelo." />
          <S.Paragraph>Se quiser conversar é só me chamar!
            Meu e-mail é thaisdavilla@yahoo.com.br
          </S.Paragraph>
        </S.DivFour>

      </S.Section>
    </body>
  )
}