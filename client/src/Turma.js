import React, { Component } from "react";
import "./App.css";
import Header from "./PaginadoAdm/components/Header";
import catequese from "./api/api";

class Turma extends Component {
  state = {
    turmas: [],
  };

  async componentDidMount() {
    const response = await catequese.get("/readall/turma");

    console.log(response.data);

    this.setState({ turmas: response.data });
  }

  render() {
    const { turmas } = this.state;

    return (
      <div className="turmas">
        <Header />
        <div className="row">
          <div className="column side"></div>
          <div className="column middle">
            <h2>Turmas</h2>
            <ul>
              {turmas.map((turma) => (
                <li key={turma.idTurma}>
                  <h3>
                    Turma:
                    {turma.idTurma}
                  </h3>
                  <h3>
                    Data Inicial:
                    {turma.dataInicio}
                  </h3>
                  <p></p>
                  <h3>
                    Data Inicial:
                    {turma.dataFim}
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
export default Turma;
