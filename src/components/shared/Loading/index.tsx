import React from 'react';
import { CircularProgress, LinearProgress } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    circular: {
        width: '2%',
        height: '3%',
        margin: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});

const Loading = ({ linear = false, circular = false }) => {
    const classes = useStyles();
    return (
        <>
            {linear && <LinearProgress />}
            {circular && (
                <div className={classes.circular}>
                    <CircularProgress />
                </div>
            )}
        </>
    );
};

Loading.propTypes = {
    linear: PropTypes.bool,
    circular: PropTypes.bool
};

export default Loading;
