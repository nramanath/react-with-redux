// this is the entry point of the app
// after creating the boiler plate code, remove all files in src folder except index.js
// remove all code in index.js


import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash', 'Walk the Dog', 'Bathe the baby'];

const element = React.createElement('ol', null,
    tasks.map((task) => React.createElement('li', null, task))
);

ReactDOM.render(element, document.getElementById('root')); // the root element is parent div tag created in the index.html file
