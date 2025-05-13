
import React from 'react';

function Home() {
  return (
    <div className="container text-center mt-5">
        <h5 className="card-title">Bienvenidos a mi pagina</h5>
        <p className="card-text">
          Bienvenidos a mi pagina web, basada en la creacion de componentes funcionales con Bootstrap
        </p>
        <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        alt="Bienvenida"
        className="img-fluid rounded mb-3"
        style={{ maxWidth: '600px' }}
      />
      </div>
    
  );
}

export default Home;