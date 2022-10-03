import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

import Axios from 'axios'

function App() {

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState(false)
  const [rg, setRg] = useState(false)
  const [compResidencia, setCompResidencia] = useState(false)

  const [catequizandosList, setCatequizandosList] = useState([])

  const addCatequizando = () => {
    Axios.post('http://localhost:3001/createCatequizando', {name:name}
    ).then(() => {
      console.log("sucess");
    });
  };

  const getCatequizando = () => {
    Axios.get('http://localhost:3001/Catequizandos').then((response) => {
      setCatequizandosList(response.data)
    });
  };


  return (
    <div className="Cadastrar">
      <h1 className="mainTitle">Paróquia Dom Bosco</h1>
      <Navbar></Navbar>
      <div className="form">
        <label>Nome Completo: </label>
        <input
          type="text" 
          onChange={(event) => {setName(event.target.value)}} 
        />
        <p>Documentos Apresentados</p>
        <div id='requisitos'>
          <lu id='requisitos'>
            <li>
              <label id='box'>CPF:</label>
              <input type="checkbox"></input>
              <label id='box'>RG:</label>
              <input type="checkbox"></input>
              <label id='box'>Comprovante de Residência:</label>
              <input type="checkbox"></input>
            </li><li>
              <label id='box'>Crisma:</label>
              <input type="checkbox"></input>
              <label id='box'>Batismo:</label>
              <input type="checkbox"></input>
              <label id='box'>Eucaristia:</label>
              <input type="checkbox"></input>
            </li>
          </lu>
          </div>
          <button onClick={addCatequizando}>Cadastrar</button>
      </div>  

      <hr></hr>
      <div className='catequizandos'>
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
