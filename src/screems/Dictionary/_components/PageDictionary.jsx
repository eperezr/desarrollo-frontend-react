import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from '../../../redux/dictionary/dictionaryActions';
import AddWordModal from './AddWordModal';
import ModalComponent from './ModalComponent';
import TranslateModal from './TranslateModal';
import { motion } from 'framer-motion';
import './DictionaryPage.css';

const DictionaryPage = () => {
  const [showAddWordModal, setShowAddWordModal] = useState(false);
  const [isDeleteWordModalOpen, setIsDeleteWordModalOpen] = useState(false);
  const [isTranslateModalOpen, setIsTranslateModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openDeleteWordModal = () => setIsDeleteWordModalOpen(true);
  const closeDeleteWordModal = () => setIsDeleteWordModalOpen(false);

  const openTranslateModal = () => setIsTranslateModalOpen(true);
  const closeTranslateModal = () => setIsTranslateModalOpen(false);

  const handleAddWord = (wordData) => {
    dispatch(addWord(wordData));
    setShowAddWordModal(false);
  };

  return (
    <div className="dictionary-container">
      <h1>DICTIONARY USIP</h1>
      <h2><small>Este </small> modulo(diccionario) <small> corresponde </small> al recuperatorio del{' '}</h2>
      <span style={{ color: 'red' }}>modulo-7</span> ReactJS URL: 
          <a href="https://github.com/eperezr/desarrollo-frontend-react" target="_blank" rel="noopener noreferrer" className="dictionary-link">
          https://github.com/eperezr/desarrollo-frontend-react
          </a>
      <div className="button-container">
        <motion.button
          onClick={() => setShowAddWordModal(true)}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          Agregar Palabra
        </motion.button>
        <motion.button
          onClick={openDeleteWordModal}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          Eliminar Palabra
        </motion.button>
        <motion.button
          onClick={openTranslateModal}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          Traducir Palabra
        </motion.button>
      </div>

      {showAddWordModal && (
        <AddWordModal
          onClose={() => setShowAddWordModal(false)}
          onAddWord={handleAddWord}
        />
      )}

      {isDeleteWordModalOpen && (
        <ModalComponent isOpen={isDeleteWordModalOpen} closeModal={closeDeleteWordModal} />
      )}
      
      {isTranslateModalOpen && (
        <TranslateModal
          isOpen={isTranslateModalOpen}
          closeModal={closeTranslateModal}
        />
      )}
      
    </div>
  );
};

export default DictionaryPage;