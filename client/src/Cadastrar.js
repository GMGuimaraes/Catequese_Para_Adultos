import React from "react";
import { Form, Button, Container, InputGroup } from "react-bootstrap";
import { FaRegWindowClose } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
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
  dataNasc: "2000-01-01T00:00:00.000Z",
};

const dias = [...Array(32).keys()].splice(1);
const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const anoAtual = 2022;
const anos = Array(anoAtual - (anoAtual - 100))
  .fill("")
  .map((value, index) => anoAtual - index);

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
      dataNasc: "2000-01-01T00:00:00.000Z",
      dia: "1",
      mes: "1",
      ano: "2000",
    };

    this.handleChange = this.handleChange.bind(this);
    this.addCatequizando = this.addCatequizando.bind(this);
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

  addCatequizando = () => {
    var state = this.state;
    var dataConvertida = this.converterData(state.dia, state.mes, state.ano);
    var nome = this.validaNome(state.nome);

    //Mensagens de Alerta exibidas quando há algum documento faltando
    if (
      state.cpf == false &&
      state.rg == true &&
      state.comprovanteResidencia == true
    ) {
      alert("CPF não foi apresentado!");
    } else if (
      state.cpf == true &&
      state.rg == false &&
      state.comprovanteResidencia == true
    ) {
      alert("RG não foi apresentado!");
    } else if (
      state.cpf == true &&
      state.rg == true &&
      state.comprovanteResidencia == false
    ) {
      alert("Comprovante de Residência não foi apresentado!");
    } else if (
      state.cpf == false &&
      state.rg == false &&
      state.comprovanteResidencia == true
    ) {
      alert("CPF e RG não foram apresentados!");
    } else if (
      state.cpf == true &&
      state.rg == false &&
      state.comprovanteResidencia == false
    ) {
      alert("RG e Comprovante de Residência não foram apresentados!");
    } else if (
      state.cpf == false &&
      state.rg == true &&
      state.comprovanteResidencia == true
    ) {
      alert("CPF e Comprovante de Residência não foram apresentados!");
    } else if (
      state.cpf == false &&
      state.rg == false &&
      state.comprovanteResidencia == false
    ) {
      alert("CPF, RG e Comprovante de Residência não foram apresentados!");
    }

    this.setState(
      {
        dataNasc: dataConvertida,
      },
      () => {
        axios
          .post(catequizandos, {
            nome: this.state.nome,
            cpf: this.state.cpf,
            rg: this.state.rg,
            comprovanteResidencia: this.state.comprovanteResidencia,
            casado: this.state.casado,
            dataNasc: this.state.dataNasc,
          })
          .then((response) => {
            console.log("sucess");
            alert("Catequizando cadastrado com sucesso!");
            window.location.reload(false);
            //history.push("/paginaadm");
          })
          .catch((error) => console.log(error));
      }
    );
  };
  converterData = (d, m, a) => {
    if (m.length < 2) {
      m = "0" + m;
    }
    if (d.length < 2) {
      d = "0" + d;
    }
    var data = a + "-" + m + "-" + d + "T01:00:00.000Z";
    console.log(data);
    return data;
  };

  validaNome = (nome) => {
    var element = document.getElementById("alertaPreenchimento");
    var nomeElement = document.getElementById("nome");

    if (nome == "") {
      element.classList.remove("d-none");
      nomeElement.classList.add("is-invalid");
    } else {
      console.log("Nome OK!");
      element.classList.add("d-none");
      nomeElement.classList.remove("is-invalid");
    }
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
                <Form.Label htmlFor="nome">
                  <b>Nome Completo: </b>
                </Form.Label>
                <Form.Control
                  id="nome"
                  name="nome"
                  type="text"
                  onChange={this.handleChange}
                  required
                />

                <Form.Control.Feedback type="invalid">
                  Por favor, preencha o nome!
                </Form.Control.Feedback>
              </Form.Group>

              <p></p>

              <div className="row">
                <Form.Group
                  className="custom-control custom-checkbox mb-3"
                  controlId="requisitos"
                >
                  <p>
                    <b>Documentos Apresentados:</b>
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
                    label="Comprovante de Residência"
                    onChange={this.handleChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="casado"
                    label="Casado"
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <div className="mb-3">
                  <b>Data de Nascimento:</b>
                </div>

                <Form.Group className="dataNasc">
                  <Form.Select
                    aria-label="Dia"
                    name="dia"
                    onChange={this.handleChange}
                  >
                    <option>Dia</option>
                    {dias.map((option) => (
                      <option key={option.toString()} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Select
                    aria-label="Mes"
                    name="mes"
                    onChange={this.handleChange}
                  >
                    <option>Mes</option>
                    {meses.map((option, index) => (
                      <option key={option.toString()} value={index + 1}>
                        {option}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Select
                    aria-label="Ano"
                    name="ano"
                    onChange={this.handleChange}
                  >
                    <option>Ano</option>
                    {anos.map((option) => (
                      <option key={option.toString()} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>

              <div
                className="alert alert-danger d-none"
                id="alertaPreenchimento"
              >
                Preencha os campos obrigatórios!
              </div>

              <div className="btnCadastrar">
                <Button variant="success" onClick={this.addCatequizando}>
                  Cadastrar Catequizando
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
