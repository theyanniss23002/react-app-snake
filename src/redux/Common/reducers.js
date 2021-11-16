import * as types from './types';
import { APPLE_START, DIRECTION_START, SNAKE_START, SPEED } from '../../helpers/constants';

const initialState = {
    players: [],
    loading_players: false,
    user_ip: '',
    score: 0,
    start_snake_coordinates: SNAKE_START,
    food: APPLE_START,
    speed: null,
    direction: DIRECTION_START,
    is_playing: false,
    game_over: false,
    has_finished_game: false
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case types.LOADED_PLAYERS:
            return {
                ...state,
                players: payload
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
                is_playing: payload
            };
        case types.SET_GAME_OVER:
            return {
                ...state,
                game_over: payload
            };
        case types.SET_HAS_FINISHED_GAME:
            return {
                ...state,
                has_finished_game: payload
            };
        case types.RESET_GAME:
            return {
                score: 0,
                is_playing: true,
                start_snake_coordinates: SNAKE_START,
                food: APPLE_START,
                direction: DIRECTION_START,
                speed: SPEED,
                has_finished_game: false
            };
        case types.LOADING_PLAYERS:
            return {
                ...state,
                loading_players: payload
            };
        case types.LOADED_IP:
            return {
                ...state,
                user_ip: payload
            };
        default:
            return state;
    }
}
