import React from "react";
import Navbar from "./Navbar";
import "./Pesquisar.css";
import { GrDocumentPdf, GrDocumentCsv } from "react-icons/gr";

class Pesquisar extends React.Component {
    render() {
        return (
            <div className="pesquisar">
                <h1 className="mainTitle">Paróquia Dom Bosco</h1>
                <Navbar></Navbar>
                <p>Aqui pode ser consultado o banco de dados dos catequizandos e a filtragem deles</p>
                <div className="filtros">
                </div>
                <div className="lista-catequizandos">
                    <div className="export-bar">
                        <p>Exportar: </p>
                        <GrDocumentPdf className="icon" onClick={() => {/*TODO*/ }} size={20}></GrDocumentPdf>
                        <GrDocumentCsv className="icon" onClick={() => {/*TODO*/ }} size={20}></GrDocumentCsv>
                    </div>
                    <h2>Catequizandos</h2>
                </div>
            </div >
        )
    }
}
export default Pesquisar;