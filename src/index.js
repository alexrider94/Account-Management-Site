import React from 'react';
import ReactDOM from 'react-dom';
import './css/Index.css';
import * as serviceWorker from './serviceWorker';
import Header from './js/Header';
import MainBody from './js/Mainbody';
import Footer from './js/Footer';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<MainBody/>, document.getElementById('body'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
