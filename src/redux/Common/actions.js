import * as types from './types';

//PLAYERS
export const loadPlayers = () => ({
    type: types.LOAD_PLAYERS
});

export const loadedPlayers = (data) => ({
    type: types.LOADED_PLAYERS,
    payload: data
});

export const createPlayer = (data) => ({
    type: types.CREATE_PLAYER,
    payload: data
});

export const updatePlayer = (id, data) => ({
    type: types.UPDATE_PLAYER,
    payload: { id, data }
});

//IP
export const loadIp = () => ({
    type: types.LOAD_IP
});

export const loadedIp = (ip) => ({
    type: types.LOADED_IP,
    payload: ip
});

export const loadingPlayers = (bool = false) => ({
    type: types.LOADING_PLAYERS,
    payload: bool
});
//SCORE
export const setScore = (score) => ({
    type: types.SET_SCORE,
    payload: score
});
//SNAKE_START
export const setSnakeStart = (coordinates) => ({
    type: types.SET_SNAKE_START,
    payload: coordinates
});
//FOOD
export const setFood = (food) => ({
    type: types.SET_FOOD,
    payload: food
});
//SPEED
export const setSpeed = (speed) => ({
    type: types.SET_SPEED,
    payload: speed
});
//DIRECTION
export const setDirection = (direction) => ({
    type: types.SET_DIRECTION,
    payload: direction
});
//IS_PLAYING
export const setIsPlaying = (is_playing = false) => ({
    type: types.SET_IS_PLAYING,
    payload: is_playing
});
//GAME_OVER
export const setGameOver = (game_over = false) => ({
    type: types.SET_GAME_OVER,
    payload: game_over
});
//SET_HAS_FINISHED_GAME
export const setHasFinishedGame = (finished_game = false) => ({
    type: types.SET_HAS_FINISHED_GAME,
    payload: finished_game
});
//RESET_GAME
export const resetGame = () => ({
    type: types.RESET_GAME
});
