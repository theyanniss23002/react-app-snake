import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './styles/common.scss';
import { Provider, ReactReduxContext } from 'react-redux';
import { store } from './store';
import CssBaseline from '@mui/material/CssBaseline';

render(
    <Provider store={store} context={ReactReduxContext}>
        <CssBaseline />
        <App />
    </Provider>,
    document.getElementById('root')
);
