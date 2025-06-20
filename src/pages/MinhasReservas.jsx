import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function MinhasReservas() {
  const [reservas, setReservas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const carregarReservas = () => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (!usuario || !usuario.id) {
      alert('Você precisa estar logado para acessar suas reservas.');
      window.location.href = '/login';
      return;
    }

    fetch(`http://localhost:5000/api/reservas/usuario/${usuario.id}`)
      .then(res => res.json())
      .then(dados => {
        setReservas(dados);
        setCarregando(false);
      })
      .catch(() => {
        alert('Erro ao carregar suas reservas.');
        setCarregando(false);
      });
  };

  useEffect(() => {
    carregarReservas();
  }, []);

  const cancelarReserva = async (id) => {
    if (!window.confirm('Tem certeza que deseja cancelar essa reserva?')) return;

    try {
      const resposta = await fetch(`http://localhost:5000/api/reservas/${id}`, {
        method: 'DELETE',
      });

      const resultado = await resposta.json();

      if (resposta.ok) {
        alert('Reserva cancelada com sucesso!');
        carregarReservas(); 
      } else {
        alert('Erro ao cancelar: ' + (resultado.erro || 'Erro desconhecido.'));
      }
    } catch (erro) {
      console.error(erro);
      alert('Erro ao cancelar reserva.');
    }
  };

  if (carregando) return <p className="text-center py-5">Carregando reservas...</p>;

  return (
    <main className="container py-5">
      <h2 className="text-success mb-4">Minhas Reservas</h2>
      {reservas.length === 0 ? (
        <p>Você ainda não fez nenhuma reserva.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="table-success">
              <tr>
                <th>Data</th>
                <th>Tanque</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map((reserva, i) => (
                <tr key={i}>
                  <td>{new Date(reserva.data_reserva).toLocaleDateString('pt-BR')}</td>
                  <td>{reserva.tanque}</td>
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={() => cancelarReserva(reserva.id)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
