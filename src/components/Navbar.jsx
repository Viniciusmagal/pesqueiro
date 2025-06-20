import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
  const [usuario, setUsuario] = useState(null);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const userStorage = localStorage.getItem("usuario");
    if (userStorage) {
      setUsuario(JSON.parse(userStorage));
    } else {
      setUsuario(null);
    }

    const handleClickFora = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMostrarMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickFora);
    return () => {
      document.removeEventListener("mousedown", handleClickFora);
    };
  }, []);

  const sair = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);         // Atualiza o estado para refletir logout
    setMostrarMenu(false);    // Fecha o menu dropdown
    navigate('/login');       // Redireciona para a página de login
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-success" to="/">
          <img src="/imagens/logo.png" alt="Logo" width="50" className="me-2" />
          Pesqueiro Santa Rita
        </Link>

        <div className="d-flex gap-3 ms-auto align-items-center">
          <Link to="/reservar-tanque" className="text-success text-decoration-none d-flex align-items-center gap-1">
            <i className="bi bi-check-circle-fill"></i> Reservas
          </Link>
          <Link to="/contato" className="text-success text-decoration-none d-flex align-items-center gap-1">
            <i className="bi bi-telephone-fill"></i> Contato
          </Link>
          <Link to="/localizacao" className="text-success text-decoration-none d-flex align-items-center gap-1">
            <i className="bi bi-geo-alt-fill"></i> Localização
          </Link>

          {usuario ? (
            <div className="dropdown" ref={menuRef}>
              <span
                className="text-success d-flex align-items-center gap-1 dropdown-toggle"
                onClick={() => setMostrarMenu(!mostrarMenu)}
                style={{ cursor: 'pointer' }}
              >
                <i className="bi bi-person-circle"></i> {usuario.nome}
              </span>
              {mostrarMenu && (
                <ul className="dropdown-menu show position-absolute" style={{ right: 0 }}>
                  <li>
                    <Link to="/minhas-reservas" className="dropdown-item">
                      Minhas Reservas
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={sair}>Sair</button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link to="/login" className="text-success text-decoration-none d-flex align-items-center gap-1">
              <i className="bi bi-person-circle"></i> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
