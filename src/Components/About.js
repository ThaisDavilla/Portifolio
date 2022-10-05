import React from "react";
import Student from "../Images/student.jpg";
import * as S from "../Style/AboutStyle";

export default function About() {
  return (
    <S.Body>
      <S.GlobalStyle />
      <S.Hone>About Me</S.Hone>
      <section>
        <S.DivOne>
          <S.Paragraph>
            No momento estou cursando o primeiro semestre de Engenharia da
            Computação pela Universidade Virtual do Estado de São Paulo.
            Paralelo a faculdade estou estudando Inglês através da IfSul e pelo
            app Busuu.
          </S.Paragraph>
          <S.Img src={Student} alt="Imagem de livros, um diploma e um capelo." />
        </S.DivOne>
        <S.DivTwo>
        <S.Img src={Student} alt="Imagem de livros, um diploma e um capelo." />
          <S.Paragraph>Desde março de 2022, através do curso técnico Vai na Web, aprendi
            os conceitos básicos de FrontEnd, aprimorando os conhecimentos e
            aprendizados também com outras plataformas e escolas, nas quais
            os conceitos de softskills são tão difundidos, aprofundados e
            apreciados como as hardskills.
          </S.Paragraph>
          
        </S.DivTwo>
        <S.DivThree>
          <S.Paragraph>Como profissional se fosse me resumir em uma única palavra seria
            com a palavra disposição, porque estou sempre atenta e disposta
            a contribuir com a equipe, sou muito curiosa e amo aprender as
            coisas e como elas funcionam, minha realização está na entrega
            do resultado, por isso gosto de participar - quando possível -
            de todas as etapas dos processos, e assim colaborar de maneira
            construtiva e aprender cada vez mais com as experiências vivenciadas.
          </S.Paragraph>
          <S.Img src={Student} alt="Imagem de livros, um diploma e um capelo." />
        </S.DivThree>
        <S.DivFour>
        <S.Img src={Student} alt="Imagem de livros, um diploma e um capelo." />
          <S.Paragraph>Sou organizada, proativa, muito comunicativa, acolhedora e boa ouvinte.
            Gosto muito de fazer amizades, de ver um bom filme, ler livros, ouvir
            música boa, passear, viajar e comer.
            Meus objetivos a curto prazo são chegar ao nível intermediário da língua
            inglesa e ser desenvolvedora FullStack.
          </S.Paragraph>
          
        </S.DivFour>
        <S.DivFive>
        <S.ParagraphLast>
          Estou a disposição caso queira me conhecer melhor! 
          Seja para uma entrevista ou para um papo informal sobre códigos, vou adorar!
        </S.ParagraphLast>
        </S.DivFive>
      </section>
    </S.Body>
  )
}