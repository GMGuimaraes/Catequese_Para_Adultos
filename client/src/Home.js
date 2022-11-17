import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Navbar from "./Navbar";
import Imagem_Home from "./images/Imagem_Home.jpg";

function Home() {
  return (
    <div className="Home">
      <div className="home-nav">
        <a href="/">
          <img
            className="mainLogo"
            src="https://static.wixstatic.com/media/a8fce9_9316f9cab9f24756942e7018593bf6aa~mv2.png/v1/crop/x_195,y_149,w_546,h_548/fill/w_432,h_434,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(84).png"
            width="40px"
            height="40px"
          ></img>
        </a>
        <a href="/login">
          <Button className="buttonLogin" variant="outline-primary">
            Login
          </Button>{" "}
        </a>
      </div>
      <header>
        <img
          src={Imagem_Home}
          className="imagemPincipal"
          width="450px"
          height="350px"
        ></img>
      </header>
      <div className="container">
        <div className="nav">
          <ul className="navi">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="/cadastrar">Cadastrar</a>
            </li>
            <li>
              <a href="/pesquisar">Pesquisar</a>
            </li>
            <li>
              <a href="/recados">Recados</a>
            </li>
          </ul>
        </div>
        <content id="left_">
          <h2>Catequese para Adultos</h2>
          <p>
            <span className="style1">Sejam Bem Vindos!</span>{" "}
          </p>
          <p>
            Aqui você pode ter o controle das atividades desenvolvidas dentro de
            sua Catequese
          </p>
          <p>
            <span className="style1">Cadastre sua turma agora!</span>{" "}
          </p>
        </content>
        <content id="right_">
          <h2>Sobre</h2>
          <p>
            Cadastre seu catequizando, confira quais os documentos foram
            apresentados, qual seu sacramento, cadastre os padrinhos e muito
            mais!
          </p>
        </content>
        <footer>
          <p>Desenvolvido pelo Grupo 2 - Construção de Software - 2022</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
