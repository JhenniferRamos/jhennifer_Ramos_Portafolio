import React, { useState } from 'react';
import './Formulario.css';
export function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`);

    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">
        Nombre:
      </label>
      <input
        type="text"
        name="nombre"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <br></br>

      <label htmlFor="correo">
        Correo electrónico:
      </label>
      <input
        type="email"
        name="correo"
        id="correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
<br></br>
      <label htmlFor="mensaje">
        Mensaje:
      </label>
      <textarea
        name="mensaje"
        id="mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />

      <button type="submit">
        Enviar
      </button>
    </form>
  );
}
