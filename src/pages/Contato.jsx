import React, { useState } from 'react';
import './Contato.css';

export default function Contato() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');
  const [carregando, setCarregando] = useState(false);

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
    document.documentElement.setAttribute('data-theme', temaEscuro ? 'light' : 'dark');
  };

  const emailEhValido = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validarFormulario = (e) => {
    e.preventDefault();

    if (nome.length < 3) {
      setMensagemErro('O nome deve ter no mínimo 3 caracteres.');
      return;
    }
    if (!email.includes('.') || !email.includes('@') || !emailEhValido(email)) {
      setMensagemErro('Por favor, insira um e-mail válido.');
      return;
    }
    if (mensagem.length < 15) {
      setMensagemErro('Escreva uma mensagem mais detalhada.');
      return;
    }

    setMensagemErro('');
    setCarregando(true);
    setMensagemSucesso('Obrigado! Em breve entraremos em contato.');

    setTimeout(() => {
      setMensagemSucesso('');
      setNome('');
      setEmail('');
      setMensagem('');
      setCarregando(false);
    }, 6000);
  };

  return (
    <div className="main-container">
      <div className="left-logo-panel"></div>
      <div className="contato-form">
        <div className="theme-switch-wrapper">
          <label className="theme-switch">
            <input type="checkbox" onChange={alternarTema} />
            <div className="slider round"></div>
          </label>
        </div>

        {carregando && <img src="/imagens/logo.png" alt="Spinner" className="spinner" />}

        <h2>Fale Conosco</h2>
        <form onSubmit={validarFormulario} action="https://formsubmit.co/contatoopesqueirosantarita@gmail.com" method="POST">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" placeholder="Seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)} required />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="seuemail@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" placeholder="Digite sua mensagem..." value={mensagem} onChange={(e) => setMensagem(e.target.value)} required></textarea>

          <button type="submit">Enviar Mensagem</button>
        </form>

        {mensagemErro && <div id="error">{mensagemErro}</div>}
        {mensagemSucesso && <div id="success-msg">{mensagemSucesso}</div>}
      </div>
    </div>
  );
}
