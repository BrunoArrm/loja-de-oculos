import React from 'react';
import "./SecaoContato.css";
import SubCard from './SubCard/SubCard';

function SecaoContato() {
  return (
    <aside class="contato" id="contato">
      <h2>FALE CONOSCO</h2>
      <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
      <div class="subContato">
        <div class="cardContato">
          <h3>Contato</h3>
          <SubCard 
            img = "../../../assets/local.png"
            alt = "Localização"
            title = "Localização"
            texto = "Nova Iguaçu, RJ" />
          <SubCard 
            img = "../../../assets/telefone.png"
            alt = "Telefone"
            title = "Telefone"
            texto = "(21) 9999-9999" />
          <SubCard 
            img = "../../../assets/email.png"
            alt = "Email"
            title = "Email"
            texto = "contato@oticavida.com" />
        </div>
        <div class="cardContato">
          <h3>Nossas Redes Sociais</h3>
          <SubCard 
            img = "../../../assets/fb.png"
            alt = "Facebook"
            title = "Facebook"
            texto = "/OticaVida" />
          <SubCard 
            img = "../../../assets/ig.png"
            alt = "Instagram"
            title = "Instagram"
            texto = "@oticavidarj" />
          <SubCard 
            img = "../../../assets/tt.png"
            alt = "Twitter"
            title = "Twitter"
            texto = "@oticavidarj" />
        </div>
      </div>
    </aside>
  )
}

export default SecaoContato;