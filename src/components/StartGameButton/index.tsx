import React from 'react';
import { ITest } from '../Core';

const StartGameButton: React.FC<ITest> = ({ isPlaying, gameOver, startGame }: ITest) => {
    return (
        <button className='start__btn' onClick={startGame}>
            {!isPlaying && !gameOver && 'Start Game'}
            {gameOver && 'Restart Game'}
        </button>
    );
};

export default StartGameButton;
