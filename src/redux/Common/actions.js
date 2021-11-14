import * as types from './types';

export const loadCharacters = () => ({
    type: types.LOAD_CHARACTERS
});

export const loadedCharacters = (data) => ({
    type: types.LOADED_CHARACTERS,
    payload: data
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
export const setIsPlaying = (isPlaying = false) => ({
    type: types.SET_IS_PLAYING,
    payload: isPlaying
});
//GAME_OVER
export const setGameOver = (gameOver = false) => ({
    type: types.SET_GAME_OVER,
    payload: gameOver
});
//SET_HAS_FINISHED_GAME
export const setHasFinishedGame = (finishedGame = false) => ({
    type: types.SET_HAS_FINISHED_GAME,
    payload: finishedGame
});
//RESET_GAME
export const resetGame = () => ({
    type: types.RESET_GAME
});
