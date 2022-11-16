import React, { Component } from "react";
import "./App.css";
import Header from "./PaginadoAdm/components/Header";
import catequese from "./api/api";
import "./Turma.css";
import { Table } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";

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

  excluir = (id) => {
    console.log(id);
    this.setState(
      {
        excluindo: false,
      },
      () => {
        catequese
          .delete("/delete/turma/" + id, {})
          .then((response) => {
            console.log("Deletado!");
            alert("Turma Deletada!");
            window.location.reload(false);
          })
          .catch((error) => console.log(error));
      }
    );
  };

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
            <Table striped bordered hover responsive="lg" size="lg">
              <thead>
                <tr>
                  <th width="5vw">Número</th>
                  <th>Data Inicial</th>
                  <th>Data Final</th>
                  <th width="5vw">Editar</th>
                  <th width="5vw">Excluir</th>
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
                  <td>
                    {turmas.map((turma) => (
                      <GrEdit></GrEdit>
                    ))}
                  </td>

                  <td>
                    {turmas.map((turma) => (
                      <AiOutlineDelete
                        key={turma.idTurma}
                        className="btnDeletar"
                        style={{ color: "black" }}
                        onClick={() => this.excluir(turma.idTurma)}
                      ></AiOutlineDelete>
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
