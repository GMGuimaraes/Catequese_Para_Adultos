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

const CreatePessoa = "http://localhost:4003/create/pessoa";
const CreatePadrinhoMadrinha = "http://localhost:4003/create/padrinhomadrinha";

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

class Padrinhos extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {};
    this.state = {
      catequizandos: [],
      editando: false,
      idEditando: 0,
      cpf: false,
      nome: "",
      rg: false,
      comprovanteResidencia: false,
      casado: false,
      dataNasc: "2000-01-01T00:00:00.000Z",
      dia: "1",
      mes: "1",
      ano: "2000",
      idPessoa: 0,
      comprovanteBatismoAdmissao: false,
      comprovantePrimeiraEucaristia: false,
      comprovanteCrisma: false,
      comprovanteCasamento: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addPessoa = this.addPessoa.bind(this);
    this.converterData = this.converterData.bind(this);
    this.addPadrinhoMadrinha = this.addPadrinhoMadrinha.bind(this);
  }

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

  addPadrinhoMadrinha = () => {
    const { catequizandos } = this.state;
    var state = this.state;
    var last = catequizandos[catequizandos.length - 1];
    var idPadrinho = last.id;
    console.log(idPadrinho);

    this.setState({}, () => {
      axios
        .post(CreatePadrinhoMadrinha, {
          idPessoa: idPadrinho,
          comprovanteBatismoAdmissao: this.state.comprovanteBatismoAdmissao,
          comprovantePrimeiraEucaristia: this.state.comprovanteCrisma,
          comprovanteCrisma: this.state.comprovanteCrisma,
          comprovanteCasamento: this.state.comprovanteCasamento,
        })
        .then((response) => {
          console.log("sucess");
          this.cadastroSacramentosPadrinho();
        })
        .catch((error) => console.log(error));
    });
  };

  addPessoa = () => {
    var state = this.state;
    var dataConvertida = this.converterData(state.dia, state.mes, state.ano);
    var nome = this.validaNome(state.nome);

    this.setState(
      {
        dataNasc: dataConvertida,
      },
      () => {
        axios
          .post(CreatePessoa, {
            nome: this.state.nome,
            cpf: this.state.cpf,
            rg: this.state.rg,
            comprovanteResidencia: this.state.comprovanteResidencia,
            casado: this.state.casado,
            dataNasc: this.state.dataNasc,
          })
          .then((response) => {
            console.log("sucess");
            //alert("Padrinho cadastrado com sucesso!");
            this.cadastroPadrinho();
            // window.location.reload(false);
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
              <div className="cadPadrinhoPt1">
                <b>Nome:</b>
                <Form.Group className="nomePadrinho mb-3">
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
              </div>

              <div
                className="alert alert-danger d-none"
                id="alertaPreenchimento"
              >
                Preencha os campos obrigatórios!
              </div>

              <div className="btnCadastrar">
                <Button
                  variant="success"
                  id="buttonCadastrarPadrinho"
                  onClick={this.addPessoa}
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
              <div className="cadPadrinhoPt2">
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
              </div>
              <div className="btnCadastrar">
                <Button
                  id="btnCadastrarSacramentosPadrinho"
                  onClick={this.addPadrinhoMadrinha}
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
            <div className="cadPadrinhoPt3">
              <AiOutlineCheck style={{ color: "green" }}></AiOutlineCheck>
              <p></p>
              <b>Padrinho Cadastrado com Sucesso!</b>
            </div>
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
