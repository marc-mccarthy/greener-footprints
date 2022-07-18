import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

import store from './redux/store';

import App from './components/App/App';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>,
    </ThemeProvider>,
    document.getElementById('react-root'),
);
