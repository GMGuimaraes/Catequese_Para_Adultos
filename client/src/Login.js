import React, { useState } from "react";

import "./App.css";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">
          <span className="login-form-title"> CATEQUESE SÃO JOÃO BOSCO </span>

          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Password"></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui cadastro? </span>
          </div>
          <div className="text2">
            <a href="/signup">Cadastrar LOGIN</a>
          </div>
          <div className="text-center">
            <span className="txt1">Esqueceu a SENHA? </span>
          </div>
          <div className="text2">
            <a href="/signup">Nova SENHA</a>
          </div>
          <div className="text-center">
            <span className="txt1">Continuar Navegando? </span>
          </div>
          <div className="text2">
            <a href="/">Voltar para o INÍCIO</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
