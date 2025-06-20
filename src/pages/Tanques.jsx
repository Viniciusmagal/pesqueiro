import React from 'react';
import { useNavigate } from 'react-router-dom';

const tanques = [
  {
    nome: 'Tanque VIP',
    imagem: '/imagens/tanquesvip.png',
    rota: '/tanquevip',
  },
  {
    nome: 'Arena Torneios',
    imagem: '/imagens/torneio.jpg',
    rota: '/areatorneio',
  },
  {
    nome: 'Arena Iniciantes',
    imagem: '/imagens/areainiciantes.png',
    rota: '/areainiciantes',
  },
  {
    nome: 'Tanque Principal',
    imagem: '/imagens/tanqueprincipal1.png',
    rota: '/tanqueprincipal',
  },
];

export default function Tanques() {
  const navigate = useNavigate();

  const irParaTanque = (rota) => {
    navigate(rota);
  };

  return (
    <main className="container py-5 bg-light">
      <h1 className="text-success mb-4">Nossos Tanques</h1>
      <div className="row">
        {tanques.map((tanque, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100">
              <img
                src={tanque.imagem}
                alt={tanque.nome}
                className="card-img-top"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{tanque.nome}</h5>
                <button
                  className="btn btn-success mt-auto"
                  onClick={() => irParaTanque(tanque.rota)}
                >
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
