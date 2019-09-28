import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import storeConfig from './redux/store';

import * as sericeWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';

const app = (
    <Provider store={storeConfig.store}>
        <BrowserRouter>
            <PersistGate persistor={storeConfig.persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

sericeWorker.register();