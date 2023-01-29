import React from 'react';
import "./SecaoSobre.css";

function SecaoSobre() {
  return (
    <aside class="sobre" id="sobre">
      <h1>QUEM SOMOS NÓS?</h1>
      <p>Fundada em 2001, em Nova Iguaçi - Rio de Janeiro, a Óticas Vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
      <div class="cardSobre">
        <div class="subCardSobre">
          <img src='../../../assets/loja.png'></img>
          <div class="subCardSobre--agrupador">
            <h2>NOSSAS FILIAIS</h2>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
        </div>
        <div class="subCardSobre">
          <div class="subCardSobre--agrupador">
            <h2>ATENDIMENTO FLEXÍVEL</h2>
            <p>Nossa equipe é treinada para te atender</p>
          </div>
          <img src='../../../assets/atendimento.png'></img>
        </div>
      </div>
    </aside>
  )
}

export default SecaoSobre;