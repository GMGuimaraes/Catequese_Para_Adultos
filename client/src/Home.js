import React from "react";
import Navbar from "./Navbar";

function Home() {
    return (
        <div className="Home">
            <img className="mainLogo"
            src="https://static.wixstatic.com/media/a8fce9_9316f9cab9f24756942e7018593bf6aa~mv2.png/v1/crop/x_195,y_149,w_546,h_548/fill/w_432,h_434,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(84).png"
            width='40px' height='40px'></img>
            <h1 className="mainTitle">Paróquia Dom Bosco</h1>
            <img className="imagemPincipal" src='http://www.diocesepresidenteprudente.com.br/wp-content/uploads/2019/07/paroquia-nossa-senhora-regente-feijo-1-regiao-01.jpg'
            width='800' height='250' ></img>
            <ul className="navi">
                <li><a href="#">Inicio</a></li>
                <li><a href="/cadastrar">Cadastrar</a></li>
                <li><a href="/pesquisar">Pesquisar</a></li>
                <li><a href="/recados">Recados</a></li>
                <li><a href="#">Novas Turmas</a></li>
                <li><a href="#">Contate-nos</a></li>
            </ul>
            <button className="login">Login</button>
            <div id="left_">
                <h2>Ultimas Mudanças</h2>
                <p><span className="style1">TODO</span> TODO TODO </p>
                <p><a href="#">mais detalhes ...</a></p>
                <p>&nbsp;</p>
                <p><span className="style1">TODO</span>TODO TODO </p>
                <p><a href="#">mais detalhes ...</a></p>
            </div>
            <div id="right_">
                <h2>Catequese para Adultos</h2>
                <p> <span className="style1">Sejam Bem Vindos</span> </p>
                <p>&nbsp;</p>
                <p> TODO TODO </p>
                <p>&nbsp;</p>
                <p>TODO TODO</p>
                <p className="style1">&nbsp;</p>
                <p>TODO TODO</p>
            </div>
        </div>
    )
}

export default Home