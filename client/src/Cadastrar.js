import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';


function App() {

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState(false)
  const [rg, setRg] = useState(false)
  const [compResidencia, setCompresidencia] = useState(false)



  return (
    <div className="Cadastrar">
      <Navbar></Navbar>
      <div className="form">
        <label>Nome Completo: </label>
        <input
          type="text" 
          onChange={(event) => {setName(event.target.value)}} 
        />
        <p>Documentos Apresentados</p>
        <label>CPF:</label>
        <input type="checkbox"></input>
        <label>RG:</label>
        <input type="checkbox"></input>
        <label>Compovante de Residência:</label>
        <input type="checkbox"></input>
        <button>Cadastrar</button>
      </div>  
    </div>
  );
}

export default App;
