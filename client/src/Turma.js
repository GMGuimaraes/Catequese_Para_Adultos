import React, { Component } from "react";
import "./App.css";
import Header from "./PaginadoAdm/components/Header";
import catequese from "./api/api";
import "./Turma.css";
import { Table } from "react-bootstrap";

const formatter = Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short",
});
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
        <h1 className="mainTitle">Paróquia São João Bosco</h1>
        <div className="row">
          <div className="column side"></div>
          <div className="column middle">
            <h2>Turmas</h2>
            <Table striped bordered hover="md">
              <thead>
                <tr>
                  <th>Número</th>
                  <th>Data Inicial</th>
                  <th>Data Final</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {turmas.map((turma) => (
                      <p key={turma.idTurma}>{turma.idTurma}</p>
                    ))}
                  </td>
                  <td>
                    {turmas.map((turma) => (
                      <p>
                        {new Date(turma.dataInicio).toLocaleDateString(
                          "pt-BR",
                          {
                            timeZone: "UTC",
                          }
                        )}
                      </p>
                    ))}
                  </td>
                  <td>
                    {turmas.map((turma) => (
                      <p>
                        {new Date(turma.dataFim).toLocaleDateString("pt-BR", {
                          timeZone: "UTC",
                        })}
                      </p>
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
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
