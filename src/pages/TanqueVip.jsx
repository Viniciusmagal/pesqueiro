import React from 'react';
import { Link } from 'react-router-dom';
import './TanqueVip.css';

export default function TanqueVip() {
  return (
    <div className="container vip-container">
      <h2 className="vip-title">Tanque VIP</h2>

      <div className="row align-items-center text-center text-md-start">
        <div className="col-md-5 mb-4 mb-md-0 text-center">
          <img src="/imagens/tanquesvip.png" alt="Tanque VIP" className="img-fluid vip-img mb-3" />
          <Link to="/reservar-tanque" className="btn btn-success btn-reservar">
            <i className="fas fa-calendar-check"></i> Reservar Agora
          </Link>
        </div>
        <div className="col-md-7 vip-text">
          <p><strong>Tanque VIP</strong>: Espaço exclusivo onde ocorreu o Campeonato Brasileiro de Pesca (CBP) da Fish TV. Com grandes peixes e muita ação, é ideal para quem busca emoção com conforto e privacidade. Acesso somente por reserva online.</p>
          <p><u>Público-alvo</u>: Pescadores experientes que buscam adrenalina e momentos únicos.</p>
        </div>
      </div>

      <div className="vip-buttons text-center mt-5">
        <div className="d-flex justify-content-center gap-5">
          <div>
            <Link to="/tanqueprincipal" className="btn btn-success btn-circle"><i className="fas fa-chevron-left"></i></Link>
            <div>Tanque anterior</div>
          </div>
          <div>
            <Link to="/areatorneio" className="btn btn-success btn-circle"><i className="fas fa-chevron-right"></i></Link>
            <div>Próximo tanque</div>
          </div>
        </div>
      </div>
    </div>
  );
}
