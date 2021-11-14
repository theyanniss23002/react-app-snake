import React, { useEffect, useRef } from 'react';
import UseInterval from '../../hooks/UseInterval';
import './style.scss';
import Arena from '../Arena';
import { useDispatch, useSelector } from 'react-redux';
import { CANVAS_SIZE, SCALE, MAX_POINTS } from '../../helpers/constants';
import StartGameButton from '../StartGameButton';
import {
    setFood,
    setGameOver,
    setHasFinishedGame,
    setIsPlaying,
    setScore,
    setSnakeStart,
    setSpeed,
    resetGame
} from '../../redux/Common/actions';

export interface ICoords {
    x: number;
    y: number;
}

export interface RootState {
    common: {
        score: number;
        start_snake_coordinates: ICoords[];
        food: ICoords;
        speed: null;
        direction: ICoords;
        isPlaying: boolean;
        gameOver: boolean;
        hasFinishedGame: boolean;
    };
}

const Core = () => {
    const dispatch = useDispatch();

    const {
        score,
        start_snake_coordinates,
        food,
        speed,
        direction,
        isPlaying,
        gameOver,
        hasFinishedGame
    } = useSelector((common: RootState) => common.common);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    function startGame() {
        dispatch(resetGame());
        wrapperRef.current?.focus();
    }

    const endGame = () => {
        dispatch(setIsPlaying(false));
        dispatch(setSpeed(null));
        dispatch(setGameOver(true));
    };

    const createRandomApple = () => {
        return {
            x: Math.floor((Math.random() * CANVAS_SIZE.x - 10) / SCALE),
            y: Math.floor((Math.random() * CANVAS_SIZE.y - 10) / SCALE)
        };
    };

    const checkAppleCollision = (newSnake: ICoords[]) => {
        if (newSnake[0].x === food.x && newSnake[0].y === food.y) {
            let newApple = createRandomApple();
            while (checkCollision(newApple, newSnake)) {
                newApple = createRandomApple();
            }
            dispatch(setScore(score + 1));
            if (score === MAX_POINTS) {
                dispatch(setHasFinishedGame(true));
                endGame();
            }
            dispatch(setFood(newApple));
            return true;
        }
        return false;
    };

    const gameLoop = () => {
        const snakeCopy = [...start_snake_coordinates];
        const newSnakeHead: ICoords = {
            x: start_snake_coordinates[0].x + direction.x,
            y: start_snake_coordinates[0].y + direction.y
        };
        if (checkCollision(newSnakeHead)) endGame();
        if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
        snakeCopy.unshift(newSnakeHead);
        dispatch(setSnakeStart(snakeCopy));
    };

    const checkCollision = (piece: ICoords, collision: ICoords[] = start_snake_coordinates) => {
        for (const segment of collision) {
            if (piece.x === segment.x && piece.y === segment.y) return true;
        }
        return (
            piece.x * SCALE >= CANVAS_SIZE.x ||
            piece.x < 0 ||
            piece.y * SCALE >= CANVAS_SIZE.y ||
            piece.y < 0
        );
    };

    UseInterval(() => gameLoop(), speed);

    useEffect(() => {
        wrapperRef.current?.focus();
    }, [isPlaying]);

    return (
        <div className='wrapper'>
            {gameOver || !isPlaying ? (
                <>
                    {hasFinishedGame ? (
                        <>
                            <span className='caps-text'>YOUR WIN</span>
                            <span className='caps-text'>Your score: {score}</span>
                            <StartGameButton
                                startGame={startGame}
                                gameOver={gameOver}
                                isPlaying={isPlaying}
                            />
                        </>
                    ) : (
                        <>
                            <span className='caps-text'>THE GAME OF SNAKE</span>
                            {gameOver && <span className='game-over'>GAME OVER</span>}
                            <StartGameButton
                                startGame={startGame}
                                gameOver={gameOver}
                                isPlaying={isPlaying}
                            />
                        </>
                    )}
                </>
            ) : (
                <Arena
                    direction={direction}
                    score={score}
                    gameOver={gameOver}
                    wrapperRef={wrapperRef}
                    canvasRef={canvasRef}
                    start_snake_coordinates={start_snake_coordinates}
                    food={food}
                />
            )}
        </div>
    );
};

export default Core;
