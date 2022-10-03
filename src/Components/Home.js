import React from "react";
import * as S from "../Style/HomeStayle";
import Photo from "../Images/photoHome.jpg";
import GitHub from "../Images/gitHub.png";
import Insta from "../Images/instagram.png";
import In from "../Images/linkedin.png";

export default function Home() {
  return (
    <>
      
      <h1>Thais D'Ávilla</h1>
      <img src={Photo} alt="Thais D'Ávilla em frente a um lago."/>
      <div>
        <a href="https://github.com/ThaisDavilla">
          <img src={GitHub} alt="Ícone do GitHub"/>
        </a>
        <a href="https://www.instagram.com/athaisdavilla/">
          <img src={Insta} alt="Ícone do Instagram"/>
        </a>
        <a href="https://www.linkedin.com/in/thaisdavilla01/">
          <img src={In} alt="Ícone do Linkedin"/>
        </a>
      </div>
    </>
  )
}