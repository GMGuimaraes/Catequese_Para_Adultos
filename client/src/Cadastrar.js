import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
//import { useHistory } from "react-router-dom";
import "./CadastroCatequizando.css";
import "./App.css";
import Header from "./PaginadoAdm/components/Header";
import catequese from "./api/api";
import axios from "axios";


const initialValueCat = {
  cpf: false,
  nome: "",
  rg: false,
  comprovanteResidencia: false,
  casado: false,
  dataNasc: '2000-01-01T00:00:00.000Z',
};

const dias = [...Array(32).keys()].splice(1);
const meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]
const anoAtual = 2022;
const anos = Array(anoAtual - (anoAtual - 100)).fill('').map((value, index) => anoAtual - index);

const catequizandos = "http://localhost:4003/create/pessoa";

class CadastroCatequizando extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cpf: false,
      nome: "",
      rg: false,
      comprovanteResidencia: false,
      casado: false,
      dataNasc: '2000-01-01T00:00:00.000Z',
      dia: 1,
      mes: 1,
      ano: 2000,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addCatequizando = this.addCatequizando.bind(this);
    this.converterData = this.converterData.bind(this);
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    }, () => console.log(this.state));
  };

  addCatequizando = () => {
    var state = this.state;
    var dataConvertida = this.converterData(state.dia, state.mes, state.ano);
    this.setState({
      dataNasc: dataConvertida
    }, () => {
      axios.post(catequizandos, {
        nome: this.state.nome,
        cpf: this.state.cpf,
        rg: this.state.rg,
        comprovanteResidencia: this.state.comprovanteResidencia,
        casado: this.state.casado,
        dataNasc: this.state.dataNasc,
      }).then((response) => {
        console.log("sucess");
        alert("Catequizando cadastrado com sucesso!");
        //history.push("/paginaadm");
      }).catch((error) => console.log(error));
    });


  };
  converterData = (d, m, a) => {
    if (m.length < 2) {
      m = '0' + m;
    }
    if (d.length < 2) {
      d = '0' + d;
    }
    var data = (a + '-' + m + '-' + d + 'T00:00:00.000Z');
    console.log(data);
    return (data);
  };


  render() {
    return (
      <div className="cadastrar">
        <Header />
        <h1 className="mainTitle">Paróquia São João Bosco</h1>
        <div className="row">
          <div className="column side"></div>
          <div className="column middle">
            <h2>Cadastro do Catequizando</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="nome">Nome Completo: </Form.Label>
                <Form.Control
                  id="nome"
                  name="nome"
                  type="text"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <p></p>

              <div className="row">
                <Form.Group
                  className="custom-control custom-checkbox"
                  controlId="requisitos"
                >
                  <p>
                    <b>Documentos Apresentados</b>
                  </p>
                  <Form.Check
                    type="checkbox"
                    name="cpf"
                    label="CPF"
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="rg"
                    label="RG"
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="comprovanteResidencia"
                    label="Comprovante de Residência:"
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="casado"
                    label="Casado"
                    onChange={this.handleChange}
                  />
                </Form.Group>


                <p>
                  <b>Data de Nascimento</b>
                </p>


                <Form.Group className="dataNasc">
                  <Form.Select
                    aria-label="Dia"
                    name="dia"
                    onChange={this.handleChange}
                  >
                    <option>Dia</option>
                    {dias.map((option) => (
                      <option key={option.toString()} value={option}>{option}</option>
                    ))}

                  </Form.Select>

                  <Form.Select
                    aria-label="Mes"
                    name="mes"
                    onChange={this.handleChange}
                  >
                    <option>Mes</option>
                    {meses.map((option, index) => (
                      <option key={option.toString()} value={index + 1}>{option}</option>
                    ))}
                  </Form.Select>

                  <Form.Select
                    aria-label="Ano"
                    name="ano"
                    onChange={this.handleChange}
                  >
                    <option>Ano</option>
                    {anos.map((option) => (
                      <option key={option.toString()} value={option}>{option}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="btnCadastrar">
                <Button variant="primary" onClick={this.addCatequizando}>
                  Cadastrar
                </Button>
              </div>
            </Form>
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
export default CadastroCatequizando;