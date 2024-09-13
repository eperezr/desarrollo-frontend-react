import React, { useState } from 'react';

const Dictionary = () => {
  const [spanish, setSpanish] = useState('');
  const [english, setEnglish] = useState('');
  const [portuguese, setPortuguese] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [wordToDelete, setWordToDelete] = useState(null);

  const [dictionary, setDictionary] = useState([]); // Store words in the dictionary

  const handleAddWord = () => {
    // Add logic to save the words to your dictionary here
    setDictionary([...dictionary, { spanish, english, portuguese }]);
    setSpanish('');
    setEnglish('');
    setPortuguese('');
    setShowModal(false);
  };

  const handleDeleteWord = () => {
    // Update the dictionary state to remove the selected word
    setDictionary(dictionary.filter((word) => word !== wordToDelete));
    setWordToDelete(null);
    setShowDeleteModal(false);
  };

  const handleInputChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleShowDeleteModal = (word) => {
    setWordToDelete(word);
    setShowDeleteModal(true);
  };

  return (
    <div>
      <h1>DICTIONARY USIP</h1>
      <p>Este modulo(diccionario) corresponde al recuperatorio del modulo-7 ReactJS. URL: https://tu_usuario.github.io/tu_proyecto/dictionary</p>
      <div className="button-container">
        <button id="add-button" onClick={handleShowModal}>Agregar palabra</button>
        {/* Add logic for other buttons here */}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Traductor USIP</h2>
            <div>
              <label htmlFor="spanish">Espanhol:</label>
              <input
                type="text"
                id="spanish"
                value={spanish}
                onChange={(e) => handleInputChange(e, setSpanish)}
              />
            </div>
            <div>
              <label htmlFor="english">Ingles:</label>
              <input
                type="text"
                id="english"
                value={english}
                onChange={(e) => handleInputChange(e, setEnglish)}
              />
            </div>
            <div>
              <label htmlFor="portuguese">Portugues:</label>
              <input
                type="text"
                id="portuguese"
                value={portuguese}
                onChange={(e) => handleInputChange(e, setPortuguese)}
              />
            </div>
            <button onClick={handleAddWord}>Agregar</button>
          </div>
        </div>
      )}
      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowDeleteModal(false)}>
              &times;
            </span>
            <h2>Eliminar palabra</h2>
            <p>¿Estás seguro de que quieres eliminar esta palabra?</p>
            <button onClick={handleDeleteWord}>Eliminar</button>
            <button onClick={() => setShowDeleteModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
      <ul>
        {dictionary.map((word, index) => (
          <li key={index}>
            <span>{word.spanish} - {word.english} - {word.portuguese}</span>
            <button onClick={() => handleShowDeleteModal(word)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dictionary;