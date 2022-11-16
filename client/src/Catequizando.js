import React, { Component } from "react";
import "./App.css";

import bdCatequese from "./api/api";
import Header from "./PaginadoAdm/components/Header";
import "./Catequizando.css";
import { GrEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { Form } from "react-bootstrap";
import axios, { Axios } from "axios";

const deleteCatequizando = "http://localhost:4003/delete/user/";

class Catequizando extends Component {
  state = {
    catequizandos: [],
    editando: false,
    idEditando: 0,
    cpf: false,
    nome: "",
    rg: false,
    comprovanteResidencia: false,
    casado: false,
    dataNasc: "2000-01-01T00:00:00.000Z",
  };

  async componentDidMount() {
    const response = await bdCatequese.get("/readall/pessoa");

    console.log(response.data);

    this.setState({ catequizandos: response.data });
  }

  editar = (cateq) => {
    console.log(cateq.id);
    this.setState({
      editando: !this.state.editando,
      idEditando: cateq.id,
      cpf: cateq.id.cpf,
      nome: cateq.id.nome,
      rg: cateq.id.rg,
      comprovanteResidencia: cateq.id.comprovanteResidencia,
      casado: cateq.id.casado,
      dataNasc: cateq.id.dataNasc,
    });
    let el = document.querySelector("#li" + cateq.id);
    let btnSalvar = el.querySelector("#btnSalvar");
    btnSalvar.style.visibility == "visible"
      ? (btnSalvar.style.visibility = "hidden")
      : (btnSalvar.style.visibility = "visible ");
  };

  salvar = (cateq) => {
    this.setState({
      editando: false,
    });
    bdCatequese.patch("/update/pessoa/" + cateq.id, {
      cpf: cateq.id.cpf,
      nome: cateq.id.nome,
      rg: cateq.id.rg,
      comprovanteResidencia: cateq.id.comprovanteResidencia,
      casado: cateq.id.casado,
      dataNasc: cateq.id.dataNasc,
    });
    let el = document.querySelector("#li" + cateq.id);
    let btnSalvar = el.querySelector("#btnSalvar");
    btnSalvar.style.visibility = "hidden";
  };

  excluir = (id) => {
    console.log(id);
    this.setState(
      {
        excluindo: false,
      },
      () => {
        bdCatequese
          .delete("/delete/pessoa/" + id, {})
          .then((response) => {
            console.log("Deletado!");
            alert("Catequizando Deletado!");
            window.location.reload(false);
          })
          .catch((error) => console.log(error));
      }
    );
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      () => console.log(this.state)
    );
  };
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
                <li id={"li" + catequizando.id}>
                  <div className="linha">
                    <p>Nome </p>
                    {this.state.editando &&
                    this.state.idEditando == catequizando.id ? (
                      <Form.Control
                        id="nome"
                        className="nomeForm"
                        name="nome"
                        type="text"
                        defaultValue={catequizando.nome}
                        onChange={this.handleChange}
                      />
                    ) : (
                      <p>{catequizando.nome}</p>
                    )}
                    <GrEdit
                      className="btnEditar"
                      onClick={() => this.editar(catequizando)}
                    ></GrEdit>
                    <AiOutlineDelete
                      className="btnDeletar"
                      style={{ color: "black" }}
                      //onChange={this.handleChange}
                      onClick={() => this.excluir(catequizando.id)}
                    ></AiOutlineDelete>
                  </div>

                  <div className="linha">
                    <p>CPF </p>
                    <p>
                      {this.state.editando &&
                      this.state.idEditando == catequizando.id ? (
                        <Form.Check
                          type="checkbox"
                          name="cpf"
                          defaultChecked={catequizando.cpf}
                          onChange={this.handleChange}
                        />
                      ) : catequizando.cpf ? (
                        "SIM"
                      ) : (
                        "NÃO"
                      )}
                    </p>
                    <button
                      id="btnSalvar"
                      className="btnSalvar"
                      onClick={() => this.salvar(catequizando)}
                    >
                      Salvar
                    </button>
                  </div>

                  <div className="linha">
                    <p>RG </p>
                    <p>
                      {this.state.editando &&
                      this.state.idEditando == catequizando.id ? (
                        <Form.Check
                          type="checkbox"
                          name="rg"
                          defaultChecked={catequizando.rg}
                          onChange={this.handleChange}
                        />
                      ) : catequizando.rg ? (
                        "SIM"
                      ) : (
                        "NÃO"
                      )}
                    </p>
                  </div>

                  <div className="linha">
                    <p>Casado </p>
                    <p>
                      {this.state.editando &&
                      this.state.idEditando == catequizando.id ? (
                        <Form.Check
                          type="checkbox"
                          name="casado"
                          defaultChecked={catequizando.casado}
                          onChange={this.handleChange}
                        />
                      ) : catequizando.casado ? (
                        "SIM"
                      ) : (
                        "NÃO"
                      )}
                    </p>
                  </div>

                  <div className="linha">
                    <p>Comprovante de Residencia </p>
                    <p>
                      {this.state.editando &&
                      this.state.idEditando == catequizando.id ? (
                        <Form.Check
                          type="checkbox"
                          name="comprovanteResidencia"
                          defaultChecked={catequizando.comprovanteResidencia}
                          onChange={this.handleChange}
                        />
                      ) : catequizando.comprovanteResidencia ? (
                        "SIM"
                      ) : (
                        "NÃO"
                      )}
                    </p>
                  </div>

                  <div className="linha">
                    <p>Data de Nascimento </p>
                    <p>
                      {new Date(
                        catequizando.dataNasc
                      ).toLocaleDateString("pt-BR", { timeZone: "UTC" })}
                    </p>
                  </div>
                  <hr></hr>
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
