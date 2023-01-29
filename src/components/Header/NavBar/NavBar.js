import React from "react";

import "./NavBar.css";

export default function NavBar() {

    return(
        <nav className="navbar">
            <ul className="navbar--lista">
                <li>
                    <a href="#produtos">PRODUTOS</a>
                </li>
                <li>
                    <a href="#sobre">SOBRE</a>
                </li>
                <li>
                    <a href="#CONTATOS">CONTATOS</a>
                </li>
            </ul>
        </nav>
    )

}