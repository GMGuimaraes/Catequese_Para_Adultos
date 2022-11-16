import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import "./CadastrarTurma.css";
import "./App.css";
import Header from "./PaginadoAdm/components/Header";
import Home from "./Home";

import Axios from "axios";
import { renderMatches } from "react-router-dom";
import axios from "axios";

const cadTurma = "http://localhost:4003/create/turma";

class CadastrarTurma extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.addTurma = this.addTurma.bind(this);
    this.converterData = this.converterData.bind(this);
  }

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

  addTurma = () => {
    var state = this.state;
    var dataInicioConvertida = this.converterData(state.dtInicioTurma);
    var dataFimConvertida = this.converterData(state.dtFimTurma);

    this.setState(
      {
        dataInicio: dataInicioConvertida,
        dataFim: dataFimConvertida,
      },
      () => {
        axios
          .post(cadTurma, {
            dataInicio: this.state.dataInicio,
            dataFim: this.state.dataFim,
          })
          .then((response) => {
            console.log("Sucesso!");
            alert("Turma cadastrada com sucesso!");
            window.location.reload(false);
          })
          .catch((error) => console.log(error));
      }
    );
  };

  converterData = (dt) => {
    var data = dt + ":00.000Z";
    console.log("Data convertida: " + data);
    return data;
  };

  render() {
    return (
      <div className="cadastrarTurma">
        <Header />
        <h1 className="mainTitle">Paróquia São João Bosco</h1>
        <div className="row">
          <div className="column side"></div>
          <div className="column middle">
            <h2>Cadastro de Turmas</h2>
            <Form>
              <Form.Group className="dtInicioTurma">
                <Form.Label htmlFor="dtInicioTurma">
                  <b>Data Inicial:</b>
                </Form.Label>
                <Form.Control
                  id="dtInicioTurma"
                  name="dtInicioTurma"
                  type="datetime-local"
                  onChange={this.handleChange}
                  required
                ></Form.Control>
              </Form.Group>

              <p></p>

              <Form.Group className="dtFimTurma">
                <Form.Label htmlFor="dtFimTurma">
                  <b>Data Final:</b>
                </Form.Label>
                <Form.Control
                  id="dtFimTurma"
                  name="dtFimTurma"
                  type="datetime-local"
                  onChange={this.handleChange}
                  required
                ></Form.Control>
              </Form.Group>
            </Form>

            <p></p>
            <div className="btnCadastrar">
              <Button variant="success" type="submit" onClick={this.addTurma}>
                Cadastrar
              </Button>
            </div>
            <div className="btnConsultarTurmas">
              <a href="/turma">
                <Button variant="primary" type="submit">
                  Ver Turmas
                </Button>
              </a>
            </div>
          </div>
          <div className="column side"></div>
        </div>
        <div></div>
        <footer>
          <p>Desenvolvido pelo Grupo 2 - Construção de Software - 2022</p>
        </footer>
      </div>
    );
  }
}
export default CadastrarTurma;
