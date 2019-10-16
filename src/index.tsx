import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './history.js';
import { Provider } from 'react-redux';
import { store } from './reducers/index';
import './style.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const content = (
    <Provider store={store}>
        <main id="main-container">
            <Router history={history}>
                <App />
            </Router>
        </main>
    </Provider>
);

ReactDOM.render(content, document.getElementById('c2app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
