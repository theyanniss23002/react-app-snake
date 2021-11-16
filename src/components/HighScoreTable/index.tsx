import React, { useEffect } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadPlayers } from '../../redux/Common/actions';
import Loading from '../Loading';

export interface IHighScore {
    common: {
        players?: any;
        game_over: boolean;
        loading_players: boolean;
    };
}

const HighScoreTable: React.FC = () => {
    const dispatch = useDispatch();

    const { players, game_over, loading_players } = useSelector(
        (common: IHighScore) => common.common
    );

    useEffect(() => {
        if (players?.length === 0 || game_over) {
            dispatch(loadPlayers());
        }
    }, [dispatch, players?.length, game_over]);

    return (
        <div className='table'>
            <div className='table__wrap'>
                <span className='table__title'>high score table</span>
                {loading_players && <Loading circular={true} />}
                <div className='table__list'>
                    {players?.length > 0
                        ? players.map((el: any) => (
                              <div key={el.id} className='table__player'>
                                  <span className='table__player-name'>
                                      NAME: {el.fields.name || 'NO NAME'}
                                  </span>
                                  <span className='table__player-score'>
                                      SCORE: {el.fields.score || 'NO SCORE'}
                                  </span>
                              </div>
                          ))
                        : !loading_players && <span className='table__no-data'>NO DATA</span>}
                </div>
            </div>
        </div>
    );
};

export default HighScoreTable;
