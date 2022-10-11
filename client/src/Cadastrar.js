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

  const addCatequizando = () => {
    Axios.post("http://localhost:3001/createCatequizando", { name: name }).then(
      () => {
        console.log("sucess");
      }
    );
  };

  const getCatequizando = () => {
    Axios.get("http://localhost:3001/Catequizandos").then((response) => {
      setCatequizandosList(response.data);
    });
  };

  return (
    <div className="cadastrar">
      <h1 className="mainTitle">Paróquia São João Bosco</h1>
      <Navbar></Navbar>
      <p>Cadastre aqui o catequizando inserindo o nome e os documentos que foram apresentados</p>
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
            <Form.Check type="checkbox" label="Comprovante de Residência:" />
            <Form.Check type="checkbox" label="Crisma" />
            <Form.Check type="checkbox" label="Batismo" />
            <Form.Check type="checkbox" label="Eucaristia" />
          </Form.Group>
        </div>
        <Button variant="primary" type="submit" onClick={addCatequizando}>
          Cadastrar
        </Button>
      </Form>

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
    </div>
  );
}

export default App;
