import React, { useState } from 'react';

const Dictionary = () => {
  return (
    <div>
      <h1>DICTIONARY USIP</h1>
      <p>Este modulo(diccionario) corresponde al recuperatorio del modulo-7 ReactJS. URL: https://tu_usuario.github.io/tu_proyecto/dictionary</p>
      <div className="button-container">
        <button id="add-button">Agregar palabra</button>
        <button id="delete-button">Eliminar palabra</button>
        <button id="translate-button">Traducir palabra</button>
      </div>
    </div>
  );
};
export default Dictionary;