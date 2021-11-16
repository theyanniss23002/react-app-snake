import React from 'react';
import './style.scss';
import { IStatusGame } from '../PreiewGame';

const StartGameButton: React.FC<IStatusGame> = ({
    startGame,
    game_over,
    is_playing
}: IStatusGame) => {
    return (
        <button className='start__btn' onClick={startGame}>
            {!is_playing && !game_over && 'START GAME'}
            {game_over && 'RESTART GAME'}
        </button>
    );
};

export default StartGameButton;
