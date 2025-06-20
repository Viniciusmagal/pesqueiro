import React from 'react';
import { Link } from 'react-router-dom';
import './BemVindos.css'; // estilos separados

export default function BemVindos() {
  return (
    <section className="main">
      <div className="imagem">
<img src="/imagens/comida.jpg" alt="Imagem do pesqueiro" />
      </div>
      <div className="text-content">
        <h1 className="title">Bem Vindos ao pesqueiro Santa Rita!</h1>
        <p>Onde a tranquilidade encontra a emoção da pesca.</p>
        <div className="divider"></div>
        <Link to="/paraiso" className="btn">SAIBA MAIS</Link>
      </div>
    </section>
  );
}
