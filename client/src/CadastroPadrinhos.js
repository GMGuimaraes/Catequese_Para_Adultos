import React, { Component } from "react";
import "./App.css";
import bdCatequese from "./api/api";
import Header from "./PaginadoAdm/components/Header";
import "./Catequizando.css";
import "./CadastroCatequizando.css";
import "./CadastroPadrinhos.css";
import { Form, Button, Container, InputGroup } from "react-bootstrap";
import { FaRegWindowClose } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import axios from "axios";

function modalPadrinhoParte1() {
  let modal = document.querySelector(".modalPadrinhos.parte1");

  modal.style.display = "block";
}
function modalPadrinhoParte2() {
  let modal = document.querySelector(".modalPadrinhos.parte2");

  modal.style.display = "block";
}
function modalPadrinhoParte3() {
  let modal = document.querySelector(".modalPadrinhos.parte3");

  modal.style.display = "block";
}

function fecharModalPadrinhos1() {
  let modal = document.querySelector(".modalPadrinhos.parte1");

  modal.style.display = "none";
}
function fecharModalPadrinhos2() {
  let modal = document.querySelector(".modalPadrinhos.parte2");

  modal.style.display = "none";
}

function fecharModalPadrinhos3() {
  let modal = document.querySelector(".modalPadrinhos.parte3");

  modal.style.display = "none";
}

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

class Padrinhos extends Component {
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

  cadastroPadrinho() {
    //Se a modal estiver aberta, cadastre uma pessoa e feche a modal
    console.log("Cadastro de padrinhos");
    fecharModalPadrinhos1();
    modalPadrinhoParte2();
  }
  cadastroSacramentosPadrinho() {
    console.log("Cadastro Sacramentos Padrinho");
    fecharModalPadrinhos2();
    modalPadrinhoParte3();
  }

  render() {
    const { catequizandos } = this.state;

    return (
      <div className="padrinhos">
        <Header />
        <h1 className="mainTitle">Paróquia São João Bosco</h1>
        <div className="row">
          <div className="column side"></div>
          <div className="column middle">
            <h2>Catequizandos</h2>
            <ul>
              {catequizandos.map((catequizando) => (
                <li id={"li" + catequizando.id}>
                  <div className="linha">
                    <p>
                      <b>Nome:</b>
                    </p>
                    <p>{catequizando.nome}</p>
                  </div>

                  <div className="btnCadastrar">
                    <Button variant="primary" onClick={modalPadrinhoParte1}>
                      Adicionar Padrinhos
                    </Button>
                  </div>
                  <div className="padrinhoCatequizando">
                    <p>
                      <b>Nome:</b>
                    </p>
                  </div>
                  <hr></hr>
                </li>
              ))}
            </ul>
          </div>
          <div className="modalPadrinhos parte1">
            <FaRegWindowClose
              className="botãoFecharModalPt1"
              onClick={fecharModalPadrinhos1}
            ></FaRegWindowClose>
            <Form>
              <h3>Cadastro de Padrinhos</h3>
              <p></p>
              <div className="InstrucoesPadrinhos">
                Primeiro, vamos cadastrar o padrinho!
              </div>
              <p></p>
              <p>
                <b>Padrinho</b>
              </p>
              <Form.Group className="nomePadrinho mb-3">
                <Form.Label>Nome:</Form.Label>

                <Form.Control id="nome" name="nome" type="text" required />
                <Form.Control.Feedback type="invalid">
                  Por favor, preencha o nome!
                </Form.Control.Feedback>
              </Form.Group>
              <p></p>
              <Form.Group
                className="custom-control custom-checkbox"
                controlId="requisitosPadrinho"
              >
                <Form.Label className="documentosPadrinhos mb-3">
                  <b>Documentos Apresentados</b>
                </Form.Label>
              </Form.Group>
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
              />{" "}
              <Form.Check
                type="checkbox"
                name="casado"
                label="Casado"
                onChange={this.handleChange}
              />
              <b>Data de Nascimento</b>
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
              <div className="btnCadastrar">
                <Button
                  variant="success"
                  id="buttonCadastrarPadrinho"
                  onClick={this.cadastroPadrinho}
                >
                  Próximo
                </Button>
              </div>
            </Form>
          </div>

          <div className="modalPadrinhos parte2">
            <FaRegWindowClose
              className="botãoFecharModalPt2"
              onClick={fecharModalPadrinhos2}
            ></FaRegWindowClose>
            <Form>
              <h3>Cadastro de Padrinhos</h3>
              <p></p>
              <div className="InstrucoesPadrinhos">
                {" "}
                Quais os documentos de sacramento ele apresentou?
              </div>
              <p></p>
              <Form.Group
                className="custom-control custom-checkbox"
                controlId="requisitosPadrinho"
              ></Form.Group>
              <Form.Check
                type="checkbox"
                name="comprovanteBatismoAdmissao"
                label="Batismo"
                onChange={this.handleChange}
              />
              <Form.Check
                type="checkbox"
                name="comprovantePrimeiraEucaristia"
                label="Primeira Eucaristia"
                onChange={this.handleChange}
              />
              <Form.Check
                type="checkbox"
                name="comprovanteCrisma"
                label="Crisma"
                onChange={this.handleChange}
              />{" "}
              <div className="btnCadastrar">
                <Button
                  id="btnCadastrarSacramentosPadrinho"
                  onClick={this.cadastroSacramentosPadrinho}
                  variant="success"
                >
                  Próximo
                </Button>
              </div>
            </Form>
          </div>

          <div className="modalPadrinhos parte3">
            <FaRegWindowClose
              className="botãoFecharModalPt3"
              onClick={fecharModalPadrinhos3}
            ></FaRegWindowClose>
            <p></p>
            <AiOutlineCheck style={{ color: "black" }}></AiOutlineCheck>
            <p></p>
            <b>Padrinho Cadastrado com Sucesso!</b>
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
export default Padrinhos;
