import React from 'react';
import { CircularProgress, LinearProgress } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
    circular: {
        width: '1vw',
        height: '1vh',
        margin: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});

interface ILoading {
    linear?: boolean;
    circular?: boolean;
}

const Loading = ({ linear = false, circular = false }: ILoading) => {
    const classes = useStyles();
    return (
        <>
            {linear && <LinearProgress color='inherit' />}
            {circular && (
                <div className={classes.circular}>
                    <CircularProgress color='secondary' />
                </div>
            )}
        </>
    );
};

export default Loading;
