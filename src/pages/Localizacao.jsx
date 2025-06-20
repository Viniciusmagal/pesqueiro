import React from 'react';

export default function Localizacao() {
  return (
    <main className="container py-5 bg-light text-center">
      <h1 className="text-success mb-4">Localização</h1>
      <p className="mb-3 fs-5">
        Estamos localizados na <strong>Rod. Benevenuto Moretto, km 6,5 - Bragança Paulista - SP</strong>
      </p>
      <div className="ratio ratio-16x9">
        <iframe
          title="Mapa do Pesqueiro Santa Rita"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.349130415432!2d-46.538640585033836!3d-22.82377964064983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8f9337ebba89f%3A0x470d0c264c1c835!2sRod.%20Benevenuto%20Moretto%2C%20Bragan%C3%A7a%20Paulista%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1718044441234!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
}
