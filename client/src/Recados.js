import React from "react";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";

class Recados extends React.Component {
    render() {
        return (
            <div className="pesquisar">
                <h1 className="mainTitle">Paróquia Dom Bosco</h1>
                <Navbar></Navbar>
                <h1>Recados</h1>
                <textarea id="story" name="story" rows="15" cols="150">Escreva seu recado aqui... 
                </textarea>
                <br></br> 
                {/* Deve ser possivel alterar o texto apenas quem fez o login, os demais
                verão como ready only*/}
                <Button id="buttonSubmit" className="buttonSubmit" onClick={() => {/*TODO*/}} variant="outline-info">
                    Submit
                </Button> 
            </div>        
        )
    }
}
export default Recados;
