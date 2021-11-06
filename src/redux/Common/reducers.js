import * as types from './types';

const initialState = {
    characters: {}
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case types.LOADED_CHARACTERS:
            return {
                ...state,
                characters: payload
            };
        default:
            return state;
    }
}
