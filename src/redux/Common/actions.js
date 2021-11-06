import * as types from './types';

export const loadCharacters = () => ({
    type: types.LOAD_CHARACTERS
});

export const loadedCharacters = (data) => ({
    type: types.LOADED_CHARACTERS,
    payload: data
});
