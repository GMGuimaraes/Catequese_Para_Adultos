import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
//import { useHistory } from "react-router-dom";
import "./CadastroCatequizando.css";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./PaginadoAdm/components/Header";
import catequese from "./api/api";

import Axios from "axios";

const initialValueCat = {
  cpf: 0,
  nome: "",
  rg: false,
  comprovanteResidencia: false,
  casado: false,
  idade: 0,
};
const CadastroCatequizando = () => {
  const [values, setValues] = useState(initialValueCat);
  //let history = useHistory();
  
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState(false);
  const [compResidencia, setCompResidencia] = useState(false);
  const [casado, setCasado] = useState(false);
  const [idade, setIdade] = useState("");
  const [catequizandosList, setCatequizandosList] = useState([]);


  const catequizandos = "http://localhost:4003/create/pessoa";
  /*
  const addCatequizando = () => {
    Axios.post(catequizandos, {
      cpf: 0,
      nome: "",
      rg: false,
      comprovanteResidencia: false,
      casado: false,
      idade: 0,
    })
      .then((response) => {
        console.log("sucess");
        alert("Catequizando cadastrado com sucesso!");
        //history.push("/paginaadm");
      })
      .catch((error) => console.log(error));
  };
  */ 
 const valFormulario = {
      cpf: false,
      nome: "",
      rg: false,
      comprovanteResidencia: false,
      casado: false,
      idade: '0000-00-00T00:00',
    }
  const addCatequizando = () => {
    Axios.post(catequizandos, valFormulario )
      .then((response) => {
        console.log("sucess");
        alert("Catequizando cadastrado com sucesso!");
        //history.push("/paginaadm");
      })
      .catch((error) => console.log(error));
  };
  function setNome() {
    valFormulario.nome = values.nome;
  }
  function alteraCpf() {
    if(values.cpf != 0)
    valFormulario.cpf = true;
    else
    valFormulario.cpf = false;
  }
  function alteraData() {
    valFormulario.idade = values.idade+" 0:0:0"
  }
  function temComprovante() {
    if(values.comprovanteResidencia != false )
    valFormulario.cpf = true;
    else
    valFormulario.cpf = false;
  }

  addCatequizando();

  function onChange(ev) {
    const { name, value } = ev.target;

    console.log({ name, values });
  }
/*
  return (
    <div className="cadastrar">
      <h1 className="mainTitle">Paróquia São João Bosco</h1>
      <div className="row">
        <div className="column side"></div>
        <div className="column middle">
          <Navbar></Navbar>
          <h2>Cadastro do Catequizando</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="nome">Nome Completo: </Form.Label>
              <Form.Control
                id="nome"
                name="nome"
                type="text"
                onChange={onChange}
              />
            </Form.Group>

            <p></p>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="cpf">CPF: </Form.Label>
              <Form.Control
                id="cpf"
                name="cpf"
                type="text"
                onChange={onChange}
              />
            </Form.Group>

            <div className="row">
              <Form.Group
                className="custom-control custom-checkbox"
                controlId="requisitos"
              >
                <p>
                  <b>Documentos Apresentados</b>
                </p>
                <Form.Check type="checkbox" label="RG" />
                <Form.Check
                  type="checkbox"
                  label="Comprovante de Residência:"
                />
                <Form.Check
                  type="checkbox"
                  label="Crisma"
                  onChange={onChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Batismo"
                  onChange={onChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Eucaristia"
                  onChange={onChange}
                />
              </Form.Group>
            </div>
            <div className="btnCadastrar">
              <Button variant="primary" type="submit" onClick={addCatequizando}>
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
};
*/
  return (
    <div className="cadastrar">
      <h1 className="mainTitle">Paróquia São João Bosco</h1>
      <div className="row">
        <div className="column side"></div>
        <div className="column middle">
          <Navbar id='navbar'></Navbar>
          <h2>Cadastro do Catequizando</h2>
          <a href="/cadastrarTurma">Cadastrar Turma?</a>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="nome">Nome Completo: </Form.Label>
              <Form.Control
                id="nome"
                name="nome"
                type="text"
                onChange={setNome}
              />
            </Form.Group>

            <p></p>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="cpf">CPF: </Form.Label>
              <Form.Control
                id="cpf"
                name="cpf"
                type="text"
                onChange={alteraCpf}
              />
            </Form.Group>

            <p></p>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="idade">Data de Nascimento: 'Formato aaaa-mm-dd' </Form.Label>
              <Form.Control
                id="idade"
                name="idade"
                type="datetime-local"
                onChange={alteraData}
              />
            </Form.Group>

            <div className="row">
              <Form.Group
                className="custom-control custom-checkbox"
                controlId="requisitos"
              >
                <p>
                  <b>Documentos Apresentados</b>
                </p>
                <Form.Check type="checkbox" label="RG" />
                <Form.Check
                  type="checkbox"
                  label="Comprovante de Residência:"
                />
                <Form.Check
                  type="checkbox"
                  label="Crisma"
                  onChange={onChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Batismo"
                  onChange={onChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Eucaristia"
                  onChange={onChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Casado"
                  onChange={onChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Comprovante de Residência"
                  onChange={temComprovante}
                />
              </Form.Group>
            </div>
            <div className="btnCadastrar">
              <Button variant="primary" type="submit" onClick={addCatequizando}>
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
};

export default CadastroCatequizando;
