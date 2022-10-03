import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    if (window.loggedin) {
        return (
            <div>
                <nav>
                    <ul className="navBar">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/cadastrar'>Cadastrar</Link>
                        </li>
                        <li>
                            <Link to='/pesquisar'>Pesquisar</Link>    
                        </li>
                        <li>
                            <Link to='/recados'>Recados</Link>
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