import React from "react";
import { Link } from "react-router-dom";

export default function Paraiso() {
  return (
    <div className="container py-5">
      <h1 className="text-success text-center mb-4">O Paraíso da Pesca te Espera!</h1>
      <p className="lead text-center text-secondary mb-5">
        Conheça os diferenciais do Pesqueiro Santa Rita e viva momentos inesquecíveis.
      </p>

      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <img
            src="/imagens/comida.jpg"
            alt="Vista do pesqueiro"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <ul className="list-group list-group-flush fs-5">
            <li className="list-group-item">🎣 Tanques para todos os níveis de pescadores</li>
            <li className="list-group-item">🍽️ Restaurante com pratos típicos deliciosos</li>
            <li className="list-group-item">🌳 Área verde para descanso e lazer</li>
            <li className="list-group-item">🪑 Quiosques confortáveis para famílias</li>
          </ul>
          <div className="mt-4">
            <Link to="/tanques" className="btn btn-success me-3">Ver Tanques</Link>
            <Link to="/hospedagem" className="btn btn-outline-success">Hospedagem</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
