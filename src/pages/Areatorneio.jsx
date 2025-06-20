import React from 'react';
import { Link } from 'react-router-dom';

export default function Areatorneio() {
  return (
    <div className="container py-5" style={{ backgroundColor: '#ccc', borderRadius: '12px', marginTop: '60px' }}>
      <h2 className="text-center mb-4" style={{ color: '#1d3c34', fontSize: '28px' }}>Arena Torneios</h2>

      <div className="row align-items-center text-center text-md-start">
        <div className="col-md-5 mb-4 mb-md-0">
          <img src="/imagens/torneio.jpg" alt="Arena Torneios" className="img-fluid rounded-4" style={{ maxWidth: '350px' }} />
        </div>
        <div className="col-md-7" style={{ fontSize: '17px', color: '#2c2c2c' }}>
          <p>Tanque voltado aos torneios internos, essa arena oferece uma pescaria dinâmica e divertida.</p>
          <p>Com peixes de até 20kg é conhecida pela alta frequência de ação e fisgadas frequentes. Nos dias sem competição, é aberto ao público e ideal para quem gosta de ver a vara envergar o tempo todo.</p>
          <p><u>Público-alvo</u>: pescadores que buscam quantidade de peixes, agito e emoção a cada arremesso.</p>
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="text-center mt-5">
        <div className="d-flex justify-content-center gap-5">
          <div>
            <Link to="/tanquevip" className="btn btn-success rounded-circle" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
              <i className="fas fa-chevron-left"></i>
            </Link>
            <div>Tanque anterior</div>
          </div>
          <div>
            <Link to="/areainiciantes" className="btn btn-success rounded-circle" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
              <i className="fas fa-chevron-right"></i>
            </Link>
            <div>Próximo tanque</div>
          </div>
        </div>
      </div>
    </div>
  );
}
