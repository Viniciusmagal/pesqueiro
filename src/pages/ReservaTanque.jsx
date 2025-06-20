import React, { useState, useEffect } from 'react';

export default function ReservaTanque() {
  const [data, setData] = useState('');
  const [tanque, setTanque] = useState('');
  const [usuarioId, setUsuarioId] = useState(null);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario && usuario.id) {
      setUsuarioId(usuario.id);
    } else {
      alert('Você precisa estar logado para reservar.');
      window.location.href = '/login';
    }
  }, []);

  const handleReservar = async (e) => {
    e.preventDefault();

    console.log("Enviando reserva:", {
      usuario_id: usuarioId,
      data_reserva: data,
      tanque: tanque,
    });

    try {
      const resposta = await fetch('http://localhost:5000/api/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario_id: usuarioId,
          data_reserva: data,     // ✅ nome correto para o backend
          tanque: tanque,
        }),
      });

      const resultado = await resposta.json();

      if (resposta.ok) {
        alert('Reserva realizada com sucesso!');
        setData('');
        setTanque('');
      } else {
        alert('Erro ao reservar: ' + (resultado.erro || 'Erro desconhecido.'));
      }
    } catch (erro) {
      console.error('Erro ao reservar:', erro);
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <main className="container py-5 bg-light">
      <h1 className="text-success mb-4">Reserva de Tanques</h1>
      <form onSubmit={handleReservar} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="data" className="form-label">Data da Reserva:</label>
          <input
            type="date"
            id="data"
            className="form-control"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="tanque" className="form-label">Tanque:</label>
          <select
            id="tanque"
            className="form-select"
            value={tanque}
            onChange={(e) => setTanque(e.target.value)}
            required
          >
            <option value="">Selecione um tanque</option>
            <option value="Tanque VIP">Tanque VIP</option>
            <option value="Arena Torneio">Arena Torneio</option>
            <option value="Área Iniciantes">Área Iniciantes</option>
            <option value="Tanque Principal">Tanque Principal</option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">Reservar</button>
        </div>
      </form>
    </main>
  );
}
