// this is the entry point of the app
// after creating the boiler plate code, remove all files in src folder except index.js
// remove all code in index.js


import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('ol', null,
    React.createElement('li', null, 'Take out the trash'),
    React.createElement('li', null, 'Shovel the driveway'),
    React.createElement('li', null, 'Walk the dog'),
);

ReactDOM.render(element, document.getElementById('root')); // the root element is parent div tag created in the index.html file
