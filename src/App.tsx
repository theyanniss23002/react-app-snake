import React from 'react';
import ruLocale from 'date-fns/locale/ru';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import './styles/common.scss';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#51a351',
            contrastText: '#fff'
        }
    }
});

const App = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
            <ThemeProvider theme={theme}>
                <div className='wrap'>
                    <span>REACT ASSEMBLY</span>
                </div>
            </ThemeProvider>
        </LocalizationProvider>
    );
};

export default App;
