import React from 'react';

export default function Hospedagem() {
  return (
    <main className="container py-5 bg-light">
      <h1 className="text-success mb-4">Hospedagem no Pesqueiro Santa Rita</h1>
      <p className="fs-5 mb-4">
        Desfrute de uma estadia confortável e relaxante em meio à natureza.
        Nossas acomodações são ideais para famílias, casais e pescadores.
      </p>
      <img
        src="/imagens/chale1.jpg"
        alt="Chalé no pesqueiro"
        className="img-fluid rounded mb-4"
      />
      <ul className="list-group mb-4">
        <li className="list-group-item">🛌 Chalés com cama de casal e solteiro</li>
        <li className="list-group-item">❄️ Ar-condicionado e ventilador</li>
        <li className="list-group-item">📺 TV e frigobar</li>
        <li className="list-group-item">🚿 Banheiro privativo</li>
        <li className="list-group-item">☕ Café da manhã incluso</li>
      </ul>
      <p className="fs-6">
        Para mais informações ou reservas, entre em contato com nossa equipe.
      </p>
    </main>
  );
}
