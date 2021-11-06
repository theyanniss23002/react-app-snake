import React from 'react';
import './high-score-table.scss';

const HighScoreTable = () => {
    return (
        <div className='table'>
            <div className='table__wrap'>
                <span className='table__title'>high score table</span>
                <div className='table__list'>
                    <div className='table__player'>
                        <img className='table__player-image' src='#' alt='' />
                        <span className='table__player-name'>Arthur</span>
                        <span className='table__player-score'>0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighScoreTable;
