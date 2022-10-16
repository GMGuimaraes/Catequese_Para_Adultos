import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import axios from "axios";
import turma from "./api/api";

class Turma extends Component {
  state = {
    turmas: [],
  };

  async componentDidMount() {
    const response = await turma.get("/readall/turma");

    console.log(response.data);

    this.setState({ turmas: response.data });
  }

  render() {
    const { turmas } = this.state;

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
            <h2>Turmas</h2>
            {turmas.map((turma) => (
              <li key={turma.idTurma}>
                <h3>
                  Data Inicial
                  {turma.dataInicio}
                </h3>
                <p></p>
                <h3>
                  Data Inicial
                  {turma.dataFim}
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
export default Turma;
