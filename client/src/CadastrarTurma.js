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
  const turma = "http://localhost:4003/create/turma";
  const readTurma = "http://localhost:4003/readall/turma";
  const delTurma ="http://localhost:4003/delete/turma/";
  const addTurma = () => {
    Axios.post(turma, {
      dataInicio: "2000-01-01T00:00:00.000Z" ,
      dataFim: "2000-01-01T00:00:00.000Z",
    })
      .then((response) => {
        console.log("sucess");
        alert("turma cadastrada com sucesso!");
        //history.push("/paginaadm");
      })
      .catch((error) => console.log(error));
  };
    const deleteTurma = () => {
    Axios.post(delTurma, {
      dataInicio: "2000-01-01T00:00:00.000Z" ,
      dataFim: "2000-01-01T00:00:00.000Z",
    })
      .then((response) => {
        console.log("sucess");
        alert("turma deletada com sucesso!");
      })
      .catch((error) => console.log(error));
  };
  const readAllTurma = () => {
    return fetch(readTurma)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        //console.log(Object.keys(responseJson).length);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log("..FormValues", formValues);
  return (
    <div className="cadastrar">
      <div className="row">
        <div className="column side"></div>
        <div className="column middle">
          <a href="/cadastrar">voltar</a>
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
              value="2022-12-11T01:11"
              onChange={handleInputChange}
              value={formValues.dataFim}
            />
          </form>

          <p></p>
          <div className="btnCadastrar">
            <Button onClick={addTurma} variant="primary" type="submit">
              Cadastrar
            </Button>
            <Button onClick={readAllTurma} variant="primary" type="submit">
              Ver Turmas
            </Button>
            <Button onClick={deleteTurma} variant="primary" type="submit">
              Deletar
            </Button>
          </div>
        </div>
        <div className="column side"></div>
      </div>
      <div>{Object.values(formValues).map(turmas => (
        <tr key={turmas.idTurma}>
          <td>{turmas.idTurma}</td>
          <td>{turmas.dataInicio}</td>
          <td>{turmas.dataFim}</td>
        </tr>
      ))}</div>
      <footer>
        <p>Desenvolvido pelo Grupo 2 - Construção de Software - 2022</p>
      </footer>
    </div>
  );
}
export default CadastrarTurma;
