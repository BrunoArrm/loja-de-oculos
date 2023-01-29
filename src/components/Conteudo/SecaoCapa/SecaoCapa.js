import React from "react";
import './SecaoCapa.css';
import capa from "../../../assets/capa.png";

export default function SecaoCapa() {
    return (
        <aside class="secaoCapa">
            <div class="secaoCapa--texto">
                <h1>Preços baixos em</h1>
                <h2>ÓCULOS DE GRAU E DE SOL</h2>
                <p>Você só encontra aqui</p>
            </div>
            <img src={capa} alt="Capa da promoção" title="Capa da promoção"></img>
        </aside>
    )
}