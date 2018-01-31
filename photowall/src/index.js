// this is the entry point of the app
// after creating the boiler plate code, remove all files in src folder except index.js
// remove all code in index.js


import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const tasks = ['Take out the trash', 'Walk the Dog', 'Bathe the baby'];


class List extends Component {
    render() {
        return (
            <ol>
                {tasks.map((task, index) => <li key={index}> {task} </li>)}
            </ol>
        );
    }
}

class Title extends Component {
    render() {
        return (
            <h1> Task List </h1>
        );
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <Title/>
                <List/>
                <List/>
            </div>
        )
    }
}
ReactDOM.render(<Main/>, document.getElementById('root')); // the root element is parent div tag created in the index.html file
