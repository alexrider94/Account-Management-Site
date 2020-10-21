import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers';

import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById('root');
ReactDOM.render(
    <App />, rootElement
);
serviceWorker.unregister();
