import React from 'react';
import CardProduto from './CardProduto/CardProduto';
import "./SecaoProdutos.css";

function SecaoProdutos() {
  return (
    <div class="produtos" id="produtos">
      <div class="produtos--cabecalho">
        <h2>NOSSOS PRODUTOS</h2>
        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
      </div>
      <div class="produtos--cards">
        <div class="produtos--cards1">
          <CardProduto 
            titulo ="Óculos de grau"
            img = "../../../../assets/oculos01.png"
            alt = "Oculos de grau"
            title = "Óculos de grau"
            preco="500,00"
          />
          <CardProduto 
            titulo = "Óculos transition"
            img = "../../../../assets/oculos02.png"
            alt = "Óculos transition"
            title = "Óculos transition"
            preco = "750,00"
          />
        </div>
        <div class="produtos--cards2">
          <CardProduto 
            titulo = "Óculos de sol"
            img = "../../../../assets/oculos03.png"
            alt = "Óculos de sol"
            title = "Óculos de sol"
            preco = "700,00"
          />
          <CardProduto 
            titulo = "Óculos infantil"
            img = "../../../../assets/oculos04.png"
            alt = "Óculos infantil"
            title = "Óculos infantil"
            preco = "500,00"  
          />
        </div>
      </div>
      <div class="produtos--rodape">
        <h2>Todos os nossos produtos incluem:</h2>
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </div>
  )
}

export default SecaoProdutos;