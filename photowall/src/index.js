// this is the entry point of the app
// after creating the boiler plate code, remove all files in src folder except index.js
// remove all code in index.js


import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class List extends Component {
    render() {
        return (
            <ol>
                {this.props.tasks.map((task, index) => <li key={index}> {task} </li>)}
            </ol>
        );
    }
}

class Title extends Component {
    render() {
        return (
            <h1> {this.props.title} </h1>
        );
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <Title title = {'To Do List'}/>
                <List tasks={['Do CySIS Lab Work', 'Apply for AMEX Card']}/>
                <List tasks={['Correct the question paper', 'Order the Gift']}/>
            </div>
        )
    }
}
ReactDOM.render(<Main/>, document.getElementById('root')); // the root element is parent div tag created in the index.html file
