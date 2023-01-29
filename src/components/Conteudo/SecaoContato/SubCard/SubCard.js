import React from 'react'
import './SubCard.css'

function SubCard(props) {
  return (
    <div class="subCard">
        <img src={props.img} alt={props.alt} title={props.title}></img>
        <p>{props.texto}</p>
    </div>
  )
}

export default SubCard

// Declarar:
// img = url da imagem
// alt = alt da imagem
// title = título da imagem
// texto = texto que vai aparecer na frente da imagem