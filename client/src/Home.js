import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="Home">
      <div className="home-nav">
        <img
          className="mainLogo"
          src="https://static.wixstatic.com/media/a8fce9_9316f9cab9f24756942e7018593bf6aa~mv2.png/v1/crop/x_195,y_149,w_546,h_548/fill/w_432,h_434,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(84).png"
          width="40px"
          height="40px"
        ></img>
        <h1 className="mainTitle">Paróquia São João Bosco</h1>
        <Button className="buttonLogin" variant="outline-info">
          Login
        </Button>
      </div>
      <header>
        <img
          className="imagemPincipal"
          src="https://site.ucdb.br//public/noticias/1033018-igreja.jpg"
          width="900"
          height="350"
        ></img>
      </header>
      <section className="jumbotron text-center">
        <div className="container">
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
      </section>

      <div className="container">
        <div className="row">
          <div id="left_">
            <h2>Catequese para Adultos</h2>
            <p>
              <span className="style1">Sejam Bem Vindos!</span>{" "}
            </p>
            <p>
              Aqui você pode ter o controle das atividades desenvolvidas dentro
              de sua Catequese
            </p>
            <p>&nbsp;</p>
            <p>
              <span className="style1">Cadastre sua turma agora!</span>TODO TODO{" "}
            </p>
            <p>
              <a href="#">mais detalhes ...</a>
            </p>
          </div>
          <div id="right_">
            <h2>Sobre</h2>
            <p>
              Cadastre seu catequizando, confira quais os documentos foram
              apresentados, qual seu sacramento, cadastre os padrinhos e muito
              mais <span className="style1"></span>{" "}
            </p>
            <p>&nbsp;</p>
            <p> sss</p>
            <p>&nbsp;</p>
            <p>...</p>
            <p className="style1">&nbsp;</p>
            <p>TODO TODO</p>
            <div id="map"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
