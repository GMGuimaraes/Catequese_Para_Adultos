import React from "react";
import ReactDOM from "react-dom/client";
import Cadastrar from "./Cadastrar";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import Pesquisar from "./Pesquisar";
import PaginaAdm from "./PaginaAdm";
import Recados from "./Recados";
import Turma from "./Turma";
import Catequizando from "./Catequizando";
import CadastrarTurma from "./CadastrarTurma";
import CadastrarPadrinho from "./CadastroPadrinhos";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

window.loggedin = true; //TODO Login autenticado

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home></Home>}>
        Home
      </Route>
      <Route path="/cadastrar" element={<Cadastrar></Cadastrar>}></Route>
      <Route path="/pesquisar" element={<Pesquisar></Pesquisar>}></Route>
      <Route path="/paginaadm" element={<PaginaAdm></PaginaAdm>}></Route>
      <Route path="/recados" element={<Recados></Recados>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route
        path="/cadastrarTurma"
        element={<CadastrarTurma></CadastrarTurma>}
      ></Route>
      <Route
        path="/cadastrarTurma"
        element={<CadastrarTurma></CadastrarTurma>}
      ></Route>
      <Route
        path="/cadastrarPadrinho"
        element={<CadastrarPadrinho></CadastrarPadrinho>}
      ></Route>
      <Route path="/turma" element={<Turma></Turma>}></Route>
      <Route
        path="/catequizando"
        element={<Catequizando></Catequizando>}
      ></Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
