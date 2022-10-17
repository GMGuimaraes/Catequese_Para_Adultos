import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "./CadastrarTurma.css";
import "./App.css";
import Header from "./PaginadoAdm/components/Header";
import Home from "./Home";

import Axios from "axios";

function CadastrarTurma() {
  const [formValues, setFormValues] = useState({ dataInicio: "", dataFim: "" });

  const handleInputChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });

    //console.log("handleChange", name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log("OK");
  };

  console.log("..FormValues", formValues);

  return (
    <div className="cadastrar">
      <Header />
      <div className="row">
        <div className="column side"></div>
        <div className="column middle">
          <h2>Cadastro de Turmas</h2>
          <form onSubmit={handleSubmit}>
            <label>Data Inicial: </label>
            <input
              type="datetime-local"
              name="dataInicio"
              onChange={handleInputChange}
              value={formValues.dataInicio}
            />
          </form>

          <p></p>

          <form onSubmit={handleSubmit}>
            <label>Data Final: </label>
            <input
              type="datetime-local"
              name="dataFim"
              onChange={handleInputChange}
              value={formValues.dataFim}
            />
          </form>

          <p></p>
          <div className="btnCadastrar">
            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
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
export default CadastrarTurma;
