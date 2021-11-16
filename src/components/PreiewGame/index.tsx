import React, { useState } from 'react';
import StartGameButton from '../StartGameButton';
import HighScoreTable from '../HighScoreTable';
import ModalComponent from '../ModalComponent';

export interface IStatusGame {
    score?: number;
    startGame?: () => void;
    game_over?: boolean;
    is_playing?: boolean;
    has_finished_game?: boolean;
}

const PreviewGame: React.FC<IStatusGame> = ({
    startGame,
    game_over,
    is_playing,
    score,
    has_finished_game
}: IStatusGame) => {
    const [openModal, setOpenModal] = useState(true);

    return (
        <>
            {openModal && (game_over || has_finished_game) ? (
                <ModalComponent isOpen={openModal} onClose={() => setOpenModal(false)} />
            ) : (
                <>
                    {has_finished_game ? (
                        <span className='caps-text'>YOUR WIN</span>
                    ) : (
                        game_over && <span className='game-over'>GAME OVER</span>
                    )}
                    {(has_finished_game || game_over) && (
                        <span className='caps-text'>Your score: {score}</span>
                    )}
                    {!has_finished_game && !game_over && (
                        <span className='caps-text'>THE GAME OF SNAKE</span>
                    )}
                    <StartGameButton
                        startGame={startGame}
                        game_over={game_over}
                        is_playing={is_playing}
                    />
                    <HighScoreTable />
                </>
            )}
        </>
    );
};

export default PreviewGame;
