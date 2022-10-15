import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import "./CadastroCatequizando.css";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState(false);
  const [rg, setRg] = useState(false);
  const [compResidencia, setCompResidencia] = useState(false);

  const [catequizandosList, setCatequizandosList] = useState([]);

  const catequizandos = "http://localhost:4003/";
  const addCatequizando = () => {
    Axios.post(catequizandos, {
      cpf: "",
      nome: "",
      rg: false,
      comprovanteResidencia: false,
      casado: false,
      idade: "",
    })
      .then((response) => {
        console.log("sucess");
      })
      .catch((error) => console.log(error));
  };

  addCatequizando();

  const getCatequizando = () => {
    Axios.get(catequizandos)
      .then((response) => {
        const data = response.data;
        //renderResults.textContent = JSON.stringify(data);
      })
      .catch((error) => console.log(error));
  };

  getCatequizando();

  return (
    <div className="cadastrar">
      <div className="header">
        <a href="/">
          <img
            className="mainLogo"
            src="https://static.wixstatic.com/media/a8fce9_9316f9cab9f24756942e7018593bf6aa~mv2.png/v1/crop/x_195,y_149,w_546,h_548/fill/w_432,h_434,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(84).png"
            width="40px"
            height="40px"
          ></img>
        </a>
        <h1 className="mainTitle">Paróquia São João Bosco</h1>
      </div>

      <div className="nav">
        <Navbar></Navbar>
      </div>
      <div className="row">
        <div className="column side"></div>
        <div className="column middle">
          <Form>
            <Form.Group className="mb-3" controlId="nomeCatequizando">
              <Form.Label>Nome Completo: </Form.Label>
              <Form.Control
                type="text"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Form.Group>

            <p></p>

            <Form.Group className="mb-3" controlId="CPFCatequizando">
              <Form.Label>CPF: </Form.Label>
              <Form.Control
                type="text"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Form.Group>

            <div className="row">
              <Form.Group
                className="custom-control custom-checkbox"
                controlId="requisitos"
              >
                <p>Documentos Apresentados</p>
                <Form.Check type="checkbox" label="RG" />
                <Form.Check
                  type="checkbox"
                  label="Comprovante de Residência:"
                />
                <Form.Check type="checkbox" label="Crisma" />
                <Form.Check type="checkbox" label="Batismo" />
                <Form.Check type="checkbox" label="Eucaristia" />
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

      <hr></hr>
      <div className="catequizandos">
        <button onClick={getCatequizando}>Exibir alunos</button>

        {catequizandosList.map((val, key) => {
          return (
            <div className="catequizando">
              <h3>Nome{val.name}</h3>
            </div>
          );
        })}
      </div>
      <footer>
        <p>Desenvolvido pelo Grupo 2 - Construção de Software - 2022</p>
      </footer>
    </div>
  );
}
export default App;
