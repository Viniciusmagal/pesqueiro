import React, { useState } from 'react';
import './Login.css';

export default function CriarConta() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch('http://localhost:5000/api/usuarios/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha }),
      });

      const resultado = await resposta.json();

      if (resposta.ok) {
        alert('Conta criada com sucesso!');
        window.location.href = '/login';
      } else {
        alert(`Erro ao criar conta: ${resultado.erro || 'Erro desconhecido.'}`);
      }
    } catch (erro) {
      console.error('Erro na requisição:', erro);
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <main className="gradient-form min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card rounded-3 shadow">
              <div className="row g-0">

                {/* FORMULÁRIO */}
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src="/imagens/logo.png" alt="Logo Pesqueiro" className="logo-img mb-4" />
                      <h4 className="mb-4">Criar nova conta</h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="form-label">Nome</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Digite seu nome"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Digite seu email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label">Senha</label>
                        <div className="input-group">
                          <input
                            type={mostrarSenha ? 'text' : 'password'}
                            className="form-control"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                          />
                          <span className="input-group-text" onClick={() => setMostrarSenha(!mostrarSenha)} style={{ cursor: 'pointer' }}>
                            <i className={`bi ${mostrarSenha ? 'bi-eye' : 'bi-eye-slash'}`}></i>
                          </span>
                        </div>
                      </div>

                      <div className="text-center pt-1 mb-5">
                        <button type="submit" className="btn btn-custom btn-block mb-3">Criar conta</button>
                        <a className="text-muted" href="/login">Já tem conta? Faça login</a>
                      </div>
                    </form>
                  </div>
                </div>

                {/* LADO DIREITO */}
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2 text-white px-4 py-5">
                  <div>
                    <h4 className="mb-3">Bem-vindo ao Pesqueiro</h4>
                    <p>Crie sua conta para fazer reservas, ver atrações e aproveitar tudo que o Santa Rita oferece.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
