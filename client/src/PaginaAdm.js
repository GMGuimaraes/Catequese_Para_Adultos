import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import "./App.css";
import "./PaginaAdm.css";
import { BrowserRouter as Router } from "react-router-dom";

function PaginaAdm() {
  return (
    <div className="PagAdm">
      <Router></Router>
      <h1>Paróquia São João Bosco</h1>
    </div>
  );
}

export default PaginaAdm;
