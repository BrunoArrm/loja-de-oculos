import React from 'react';
import './CardProduto.css';

function CardProduto(props) {
  return (
    <div class="card">
        <h2>{props.titulo}</h2>
        <img class="imagemProduto" src={props.img} alt={props.alt} title={props.title}></img>
        <p>R$ {props.preco}</p>
    </div>
  )
}

export default CardProduto;

// Declarar:
// titulo   = título do produto
// img      = imagem do produto
// alt      = alt do produto
// title    = titulo da imagem
// preco    = preço do produto
