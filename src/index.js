import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';

const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log(
                '[Middleware] before ' + action.type + ' action state: ',
                store.getState(),
            );
            console.log('[Middleware] action: ', action);
            const result = next(action);
            console.log(
                '[Middleware] after  ' + action.type + ' action state: ',
                store.getState(),
            );
            return result;
        };
    };
};

const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>{' '}
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
