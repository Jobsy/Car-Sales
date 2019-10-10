import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import 'bulma/css/bulma.css';
import './styles.scss';
import * as reducers from './state/reducers';

const monsterReducer = combineReducers({
    carSale: reducers.appReducer,
});

const store = createStore(
    monsterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)