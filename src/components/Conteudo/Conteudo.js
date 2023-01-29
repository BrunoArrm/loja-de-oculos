import React from "react";
import './Conteudo.css';
import SecaoCapa from "./SecaoCapa/SecaoCapa";
import SecaoContato from "./SecaoContato/SecaoContato";
import SecaoProdutos from "./SecaoProdutos/SecaoProdutos";
import SecaoSobre from "./SecaoSobre/SecaoSobre";

export default function Conteudo() {
    return(
        <main className="conteudo">
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContato />
        </main>
    )
}