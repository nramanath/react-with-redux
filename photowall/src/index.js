// this is the entry point of the app
// after creating the boiler plate code, remove all files in src folder except index.js
// remove all code in index.js


import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash', 'Walk the Dog', 'Bathe the baby'];


// JSX expression - enclose it in the curly brances {}
const element =
    <div>
        <h1> Task List </h1>
        <ol>
            {tasks.map((task, index) => <li key={index}> {task} </li>)}
        </ol>
    </div>


ReactDOM.render(element, document.getElementById('root')); // the root element is parent div tag created in the index.html file
