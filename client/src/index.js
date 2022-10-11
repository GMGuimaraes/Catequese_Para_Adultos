import React from "react";
import ReactDOM from "react-dom/client";
import Cadastrar from "./Cadastrar";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";

window.loggedin = true; //TODO Login autenticado

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home></Home>}>
        Home
      </Route>
      <Route path="/cadastrar" element={<Cadastrar></Cadastrar>}></Route>
      <Route path="/pesquisar" element={<h1>Pesquisar (TODO)</h1>}></Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
