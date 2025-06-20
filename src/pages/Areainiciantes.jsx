import React from 'react';
import { Link } from 'react-router-dom';

export default function Areainiciantes() {
  return (
    <div className="container py-5" style={{ backgroundColor: '#ccc', borderRadius: '12px', marginTop: '60px' }}>
      <h2 className="text-center mb-4" style={{ color: '#1d3c34', fontSize: '28px' }}>Arena Iniciantes</h2>

      <div className="row align-items-center text-center text-md-start">
        <div className="col-md-5 mb-4 mb-md-0 text-center">
          <img
            src="/imagens/areainiciantes.png"
            alt="Tanque Arena Iniciantes"
            className="img-fluid mb-3 rounded-4"
            style={{ maxWidth: '350px' }}
          />
        </div>
        <div className="col-md-7" style={{ fontSize: '17px', color: '#2c2c2c' }}>
          <p>Se você está começando na pesca esportiva ou quer um dia tranquilo com a família, esse é o tanque ideal!</p>
          <p>Com peixes menores e ótima frequência de ações, é perfeito para crianças, casais ou qualquer um que queira aproveitar um momento leve e divertido.</p>
          <p><u>Público-alvo</u>: Crianças e quem está aprendendo.</p>
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="text-center mt-5">
        <div className="d-flex justify-content-center gap-5">
          <div>
            <Link to="/areatorneio" className="btn btn-success rounded-circle" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
              <i className="fas fa-chevron-left"></i>
            </Link>
            <div>Tanque anterior</div>
          </div>
          <div>
            <Link to="/tanqueprincipal" className="btn btn-success rounded-circle" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
              <i className="fas fa-chevron-right"></i>
            </Link>
            <div>Próximo tanque</div>
          </div>
        </div>
      </div>
    </div>
  );
}
