import { ADD_WORD, REMOVE_WORD, TRANSLATE_WORD, CLEAR_TRANSLATION } from './dictionaryTypes';

const initialState = {
  words: [], 
  translation: '', 
  error: '', 
};

const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORD:
      return {
        ...state,
        words: [...state.words, action.payload],
      };
    case REMOVE_WORD:
      return {
        ...state,
        words: state.words.filter(word =>
          word.spanish !== action.payload &&
          word.english !== action.payload &&
          word.portuguese !== action.payload
        ),
      };
    case TRANSLATE_WORD:
      const { inputWord, language } = action.payload;

      const wordEntry = state.words.find(word =>
        word.spanish === inputWord ||
        word.english === inputWord ||
        word.portuguese === inputWord
      );

      if (wordEntry) {
        let translation = '';

        switch (language) {
          case 'English':
            translation = wordEntry.english || 'no se encuentra traduccion, vuelva a intentar';
            break;
          case 'Spanish':
            translation = wordEntry.spanish || 'no se encuentra traduccion, vuelva a intentar';
            break;
          case 'Portuguese':
            translation = wordEntry.portuguese || 'no se encuentra traduccion, vuelva a intentar';
            break;
          default:
            translation = 'Idioma no compatible';
        }

        return {
          ...state,
          translation: translation,
          error: '', 
        };
      } else {
        return {
          ...state,
          translation: 'no esta dentro el diccionario',
          error: 'no esta dentro el diccionario', 
        };
      }
    case CLEAR_TRANSLATION:
      return {
        ...state,
        translation: '',
        error: '', 
      };
    default:
      return state;
  }
};

export default dictionaryReducer;
