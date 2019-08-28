import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './reducers/index';
import './style.css';
import App from './containers/App';
import CategoriesList from './containers/CategoriesList';
import * as serviceWorker from './serviceWorker';

const content = (
    <Provider store={store}>
        <main id="main-container">
            <App />
        </main>
    </Provider>
);

ReactDOM.render(content, document.getElementById('c2app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
