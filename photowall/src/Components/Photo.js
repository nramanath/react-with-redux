/**
 * Created by ramanathan on 01/02/18.
 */


import React, {Component} from 'react';


function Photo(props) {
    const post = props.post;
    return (
        <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description}/>
            <figcaption><p> {post.description}</p></figcaption>
            <div className="button-container">
                <button className="remove-button">Remove</button>
            </div>
        </figure>
    )
}

// class Photo extends Component {
//     render() {
//         const post = this.props.post;
//
//     }
// }

export default Photo;