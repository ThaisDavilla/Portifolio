import React from "react";
import * as S from "../Style/HomeStayle";
import Photo from "../Images/photoHome.jpg";
import GitHub from "../Images/gitHubTwo.png";
import Insta from "../Images/instagram.png";
import In from "../Images/linkedin.png";

export default function Home() {
  return (
    <S.Body>
      <S.ImgProfile src={Photo} alt="Thais D'Ávilla em frente a um lago." />
      <S.Hone>Thais D'Ávilla</S.Hone>
      <S.BoxIcons>
        <a href="https://github.com/ThaisDavilla" target="_blank">
          <S.Icons src={GitHub} alt="Ícone do GitHub" />
        </a>
        <a href="https://www.instagram.com/athaisdavilla/" target="_blank">
          <S.Icons src={Insta} alt="Ícone do Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/thaisdavilla01/" target="_blank">
          <S.Icons src={In} alt="Ícone do Linkedin" />
        </a>
      </S.BoxIcons>
    </S.Body>
  )
}