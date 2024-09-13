import { SET_FORM_DICTIONARY } from './dictionaryTypes';

const initialState = {
    formDictionary: {
        espanol: '',
        ingles: '',
        portugues: '',
    },
};

const dictionaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DICTIONARY : {
            return {
                ...state,
                formDictionary: {
                    ...state.formDictionary,
                    ...action.payload,
                }
            }
        }
        default:
            return state;
    }
};

export default dictionaryReducer;