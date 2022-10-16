import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import "./CadastrarTurma.css";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

import Axios from "axios";

function CadastrarTurma() {
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

      <div className="row">
        <div className="column side"></div>
        <div className="column middle">
          <h2>Cadastro de Turmas</h2>
          <Form>
            <Form.Group className="mb-3" controlId="dtInicialTurma">
              <Form.Label>Data Inicial: </Form.Label>
              <Form.Control type="datetime-local" />
            </Form.Group>

            <p></p>

            <Form.Group className="mb-3" controlId="dtFinalTurma">
              <Form.Label>Data Final: </Form.Label>
              <Form.Control type="datetime-local" />
            </Form.Group>

            <p></p>
            <div className="btnCadastrar">
              <Button variant="primary" type="submit">
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
export default CadastrarTurma;
