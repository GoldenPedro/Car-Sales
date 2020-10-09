import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {priceReducer} from './reducers/index'

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';
import { Provider } from 'react-redux';

const store = createStore(priceReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    rootElement
);
