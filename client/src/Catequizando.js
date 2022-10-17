import React, { Component } from "react";
import "./App.css";

import turma from "./api/api";
import Header from "./PaginadoAdm/components/Header";


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
        <Header />

        <div className="row">
          <div className="column side"></div>
          <div className="column middle">
            <h2>Catequizandos</h2>
            <ul>
              {catequizandos.map((catequizando) => (
                <li key={catequizando.id}>
                  <h3>
                    Nome:
                    {catequizando.nome}
                  </h3>
                  <p></p>
                  <h3>
                    CPF:
                    {catequizando.cpf}
                  </h3>
                  <p></p>
                  <h3>
                    RG:
                    {catequizando.rg}
                  </h3>
                  <p></p>
                  <h3>
                    Data de Nascimento:
                    {new Date(catequizando.dataNasc).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                  </h3>
                  <p></p>
                </li>
              ))}
            </ul>
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
