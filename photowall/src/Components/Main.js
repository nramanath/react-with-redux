/**
 * Created by ramanathan on 31/01/18.
 */

import React, {Component} from 'react';
import List from './List';
import Title from './Title';

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

export default Main;
