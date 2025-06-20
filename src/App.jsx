import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import BemVindos from './pages/Bemvindos';
import Login from './pages/Login';
import CriarConta from './pages/CriarConta';
import Contato from './pages/Contato';
import AreaIniciantes from './pages/Areainiciantes';
import ArenaTorneio from './pages/Areatorneio';
import Disponibilidade from './pages/Disponibilidade';
import Hospedagem from './pages/Hospedagem';
import Localizacao from './pages/Localizacao';
import Paraiso from './pages/Paraiso';
import ReservaTanque from './pages/ReservaTanque';
import Tanques from './pages/Tanques';
import TanqueVip from './pages/TanqueVip';
import TanquePrincipal from './pages/TanquePrincipal';
import MinhasReservas from './pages/MinhasReservas'; // 👈 ADD AQUI

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BemVindos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criar-conta" element={<CriarConta />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/areainiciantes" element={<AreaIniciantes />} />
        <Route path="/areatorneio" element={<ArenaTorneio />} />
        <Route path="/disponibilidade" element={<Disponibilidade />} />
        <Route path="/hospedagem" element={<Hospedagem />} />
        <Route path="/localizacao" element={<Localizacao />} />
        <Route path="/paraiso" element={<Paraiso />} />
        <Route path="/reservar-tanque" element={<ReservaTanque />} />
        <Route path="/tanques" element={<Tanques />} />
        <Route path="/tanquevip" element={<TanqueVip />} />
        <Route path="/tanqueprincipal" element={<TanquePrincipal />} />
        <Route path="/minhas-reservas" element={<MinhasReservas />} /> {/* 👈 AQUI TAMBÉM */}
      </Routes>
      <Footer />
    </>
  );
}
