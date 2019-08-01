import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './store/rootReducer';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const logger = createLogger({
    // ...options
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware, logger),
    )
);


function renderToDOM() {
    if (document.getElementById('root') !== null) {
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>, 
            document.getElementById('root')
        )
    }
}
renderToDOM();
export {renderToDOM};



/**
|--------------------------------------------------
| If you want your app to work offline and load faster, you can change
| unregister() to register() below. Note this comes with some pitfalls.
| Learn more about service workers: https://bit.ly/CRA-PWA
|--------------------------------------------------
*/
serviceWorker.unregister();
