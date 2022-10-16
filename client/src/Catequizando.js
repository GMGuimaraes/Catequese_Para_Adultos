import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import turma from "./api/api";

class Catequizando extends Component {
  state = {
    catequizandos: [],
  };

  async componentDidMount() {
    const response = await turma.get("/readall/pessoa");

    console.log(response.data);

    this.setState({ catequizandos: response.data });
  }

  render() {
    const { catequizandos } = this.state;

    return (
      <div className="cadastrar">
        <div className="header">
          <a href="/">
            <img
              className="mainLogo"
              src="https://static.wixstatic.com/media/a8fce9_9316f9cab9f24756942e7018593bf6aa~mv2.png/v1/crop/x_195,y_149,w_546,h_548/fill/w_432,h_434,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(84).png"
              width="40px"
              height="40px"
            ></img>
          </a>
          <h1 className="mainTitle">Paróquia São João Bosco</h1>
        </div>

        <div className="row">
          <div className="column side"></div>
          <div className="column middle">
            <h2>Catequizandos</h2>
            {catequizandos.map((catequizando) => (
              <li key={catequizando.cpf}>
                <h3>
                  Nome:
                  {catequizando.nome}
                </h3>
                <p></p>
                <h3>
                  RG:
                  {catequizando.rg}
                </h3>
                <p></p>
              </li>
            ))}
          </div>
          <div className="column side"></div>
        </div>

        <footer>
          <p>Desenvolvido pelo Grupo 2 - Construção de Software - 2022</p>
        </footer>
      </div>
    );
  }
}
export default Catequizando;
