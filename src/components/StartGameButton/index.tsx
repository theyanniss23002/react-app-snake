import React from 'react';
import './style.scss';

export interface IStartGame {
    isPlaying?: boolean;
    gameOver?: boolean;
    startGame?: any;
}

const StartGameButton: React.FC<IStartGame> = ({ isPlaying, gameOver, startGame }: IStartGame) => {
    return (
        <button className='start__btn' onClick={startGame}>
            {!isPlaying && !gameOver && 'Start Game'}
            {gameOver && 'Restart Game'}
        </button>
    );
};

export default StartGameButton;
