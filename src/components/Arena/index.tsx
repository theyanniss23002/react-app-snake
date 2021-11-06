import React, { useState } from 'react';
import './arena.scss';

const Arena = () => {
    const initialState = {
        gridLength: 100,
        grid: [],
        isFood: 0
    };

    const grid = Array(initialState.gridLength)
        .fill('')
        .map((_, i) => {
            return { id: i, isFood: false };
        });

    const [data, setData] = useState({ ...initialState, grid: grid });
    const [openGrid, setOpenGrid] = useState(false);

    const generateFood = () => {
        const randomIndex = Math.floor(
            Math.random() * (data?.grid.length - 1 + 1)
        );
        if (data?.grid.length) {
            const arrWithFood = grid.map((item, i) => {
                if (i === randomIndex) {
                    return { ...item, isFood: true };
                }
                return item;
            });
            setData({ ...data, grid: arrWithFood });
        }
    };

    const handleOpenGrid = () => {
        setOpenGrid(true);
        generateFood();
    };

    const gridItems = data.grid.map((item) => {
        return (
            <div
                key={item.id}
                className={item.isFood ? 'grid-item is-food' : 'grid-item'}
            />
        );
    });

    return (
        <>
            {openGrid ? (
                <div className='container'>
                    <div className='grid'>{gridItems}</div>
                </div>
            ) : (
                <button className='start__btn' onClick={handleOpenGrid}>
                    START GAME
                </button>
            )}
        </>
    );
};

export default Arena;
