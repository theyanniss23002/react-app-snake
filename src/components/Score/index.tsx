import React, { useState } from 'react';
import './score.scss';

const Score = () => {
    const initialState = {
        count: 0
    };

    const [data] = useState(initialState);

    return <div className='score'>{data.count}</div>;
};

export default Score;
