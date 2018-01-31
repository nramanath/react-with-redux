// this is the entry point of the app
// after creating the boiler plate code, remove all files in src folder except index.js
// remove all code in index.js


import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('h1', null, 'Hello World');

ReactDOM.render(element, document.getElementById('root')); // the root element is parent div tag created in the index.html file
