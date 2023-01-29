import React from 'react';
import "./Header.css";
import logo from"../../assets/logo.png";
import NavBar from './NavBar/NavBar';

export default function Header() {
    return (
        <header class="cabecalho">

            <img src={logo} alt='Óticas Vida' title='Óticas Vida'></img>
            <NavBar />

        </header>
    )
}