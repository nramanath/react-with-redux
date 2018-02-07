// this is the entry point of the app
// after creating the boiler plate code, remove all files in src folder except index.js
// remove all code in index.js


import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root')); // the root element is parent div tag created in the index.html file
