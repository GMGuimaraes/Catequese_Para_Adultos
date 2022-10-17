import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  if (window.loggedin) {
    return (
      <div id="navbar">
        <nav className="navbar">
          <ul>
            <li>
              <Link id='home' to="/">Home</Link>
            </li>
            <li>
              <Link id='cadastrar' to="/cadastrar">Cadastrar</Link>
            </li>
            <li>
              <Link id='pesquisar' to="/pesquisar">Pesquisar</Link>
            </li>
            <li>
              <Link id='recados' to="/recados">Recados</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div>
      <button>Entrar</button>
    </div>
  );
}

export default Navbar;
