import React from 'react';
import { Link } from 'react-router-dom';

export default function TanquePrincipal() {
  return (
    <div className="container py-5" style={{ backgroundColor: '#ccc', borderRadius: '12px', marginTop: '60px' }}>
      <h2 className="text-center mb-4" style={{ color: '#1d3c34', fontSize: '28px' }}>Tanque Principal</h2>

      <div className="row align-items-center text-center text-md-start">
        <div className="col-md-5 mb-4 mb-md-0 text-center">
          <img
            src="/imagens/tanqueprincipal1.png"
            alt="Tanque Principal"
            className="img-fluid mb-3 rounded-4"
            style={{ maxWidth: '350px' }}
          />
        </div>
        <div className="col-md-7" style={{ fontSize: '17px', color: '#2c2c2c' }}>
          <p>É o tanque mais procurado por quem busca força e resistência na pescaria.</p>
          <p>Lar de peixes gigantes e bem ativos, oferece combates intensos e inesquecíveis. Aqui, cada arremesso pode virar uma grande história.</p>
          <p><u>Público-alvo</u>: Pescadores que estão em busca de troféus.</p>
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="text-center mt-5">
        <div className="d-flex justify-content-center gap-5">
          <div>
            <Link to="/areainiciantes" className="btn btn-success rounded-circle" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
              <i className="fas fa-chevron-left"></i>
            </Link>
            <div>Tanque anterior</div>
          </div>
          <div>
            <Link to="/tanquevip" className="btn btn-success rounded-circle" style={{ width: '40px', height: '40px', fontSize: '18px' }}>
              <i className="fas fa-chevron-right"></i>
            </Link>
            <div>Próximo tanque</div>
          </div>
        </div>
      </div>
    </div>
  );
}
