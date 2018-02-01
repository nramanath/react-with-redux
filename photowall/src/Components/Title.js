/**
 * Created by ramanathan on 31/01/18.
 */

import React, {Component} from 'react';


// the rule of thumb - if we are using only the render method of the class, then we can
// convert them into stateless functional components

// however, we usually use class components, since we have many uses of the lifecycle of the classes

function Title(props) {
    return (
        <h1> {props.title} </h1>
    );
}

// class Title extends Component {
//     render() {
//
//     }
// }

export default Title;
