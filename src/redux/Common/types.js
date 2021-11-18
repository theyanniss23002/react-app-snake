import moduleName from './module';
const prefix = `${moduleName}`;

//PLAYERS
export const LOAD_PLAYERS = `${prefix}/LOAD/PLAYERS`;
export const LOADING_PLAYERS = `${prefix}/LOADING/PLAYERS`;
export const LOADED_PLAYERS = `${prefix}/LOADED/PLAYERS`;
export const CREATE_PLAYER = `${prefix}/CREATE/PLAYER`;
export const UPDATE_PLAYER = `${prefix}/UPDATE/PLAYER`;

//SCORE
export const SET_SCORE = `${prefix}/SET/SCORE`;
//SNAKE_START
export const SET_SNAKE_START = `${prefix}/SET/SNAKE/START`;
//FOOD
export const SET_FOOD = `${prefix}/SET/FOOD`;
//SPEED
export const SET_SPEED = `${prefix}/SET/SPEED`;
//DIRECTION
export const SET_DIRECTION = `${prefix}/SET/DIRECTION`;
//IS_PLAYING
export const SET_IS_PLAYING = `${prefix}/SET/IS/PLAYING`;
//GAME_OVER
export const SET_GAME_OVER = `${prefix}/SET/GAME/OVER`;
//HAS_FINISHED_GAME
export const SET_HAS_FINISHED_GAME = `${prefix}/SET/HAS/FINISHED/GAME`;
//RESET_GAME
export const RESET_GAME = `${prefix}/RESET/GAME`;
