import * as types from './types';
import { APPLE_START, DIRECTION_START, SNAKE_START, SPEED } from '../../helpers/constants';

const initialState = {
    characters: {},
    score: 0,
    start_snake_coordinates: SNAKE_START,
    food: APPLE_START,
    speed: null,
    direction: DIRECTION_START,
    isPlaying: false,
    gameOver: false,
    hasFinishedGame: false
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case types.LOADED_CHARACTERS:
            return {
                ...state,
                characters: payload
            };
        case types.SET_SCORE:
            return {
                ...state,
                score: payload
            };
        case types.SET_SNAKE_START:
            return {
                ...state,
                start_snake_coordinates: payload
            };
        case types.SET_FOOD:
            return {
                ...state,
                food: payload
            };
        case types.SET_SPEED:
            return {
                ...state,
                speed: payload
            };
        case types.SET_DIRECTION:
            return {
                ...state,
                direction: payload
            };
        case types.SET_IS_PLAYING:
            return {
                ...state,
                isPlaying: payload
            };
        case types.SET_GAME_OVER:
            return {
                ...state,
                gameOver: payload
            };
        case types.SET_HAS_FINISHED_GAME:
            return {
                ...state,
                hasFinishedGame: payload
            };
        case types.RESET_GAME:
            return {
                score: 0,
                isPlaying: true,
                start_snake_coordinates: SNAKE_START,
                food: APPLE_START,
                direction: DIRECTION_START,
                speed: SPEED,
                hasFinishedGame: false
            };
        default:
            return state;
    }
}
