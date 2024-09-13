import { SET_FORM_DICTIONARY } from './dictionaryTypesTypes';

export const saveFormDictionary = (dictionaryData) => {
    return {
        type: SET_FORM_DICTIONARY,
        payload: dictionaryData,
    }
}
