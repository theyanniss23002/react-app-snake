import React, { useEffect } from 'react';
import { CANVAS_SIZE, DIRECTIONS, SCALE } from '../../helpers/constants';
import { ICoords } from '../Core';
import { setDirection } from '../../redux/Common/actions';
import { useDispatch } from 'react-redux';
import './style.scss';

// type RefWrapper<T> = HTMLDivElement | ((instance: T) => any);
// type RefCanvas<T> = HTMLCanvasElement | ((instance: T) => any);

interface IArena {
    direction: ICoords;
    score: number;
    gameOver: boolean;
    wrapperRef?: any;
    canvasRef?: any;
    start_snake_coordinates: ICoords[];
    food: ICoords;
}

const Arena = React.forwardRef(
    ({ direction, score, wrapperRef, canvasRef, start_snake_coordinates, food }: IArena) =>
        // wrapperRef: RefWrapper<any>,
        // canvasRef: RefCanvas<any>
        {
            const dispatch = useDispatch();

            const moveSnake = (event: React.KeyboardEvent) => {
                const { key } = event;
                if (
                    key === 'ArrowUp' ||
                    key === 'ArrowDown' ||
                    key === 'ArrowRight' ||
                    key === 'ArrowLeft'
                ) {
                    if (direction.x + DIRECTIONS[key].x && direction.y + DIRECTIONS[key].y) {
                        dispatch(setDirection(DIRECTIONS[key]));
                    }
                }
            };

            useEffect(() => {
                const context = canvasRef.current?.getContext('2d');
                if (context) {
                    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
                    context.clearRect(0, 0, CANVAS_SIZE.x, CANVAS_SIZE.y);
                    context.fillStyle = 'rgba(145, 61, 136, 1)';
                    start_snake_coordinates.forEach(({ x, y }) => context.fillRect(x, y, 1, 1));
                    context.fillStyle = 'rgba(207, 0, 15, 1)';
                    context.fillRect(food.x, food.y, 1, 1);
                }
            }, [start_snake_coordinates, food]);

            return (
                <>
                    <span className='score'>Score: {score}</span>
                    <div
                        ref={wrapperRef}
                        className='canvas'
                        role='button'
                        tabIndex={0}
                        onKeyDown={(event: React.KeyboardEvent) => moveSnake(event)}
                    >
                        <canvas ref={canvasRef} width={CANVAS_SIZE.x} height={CANVAS_SIZE.y} />
                    </div>
                </>
            );
        }
);

export default Arena;
