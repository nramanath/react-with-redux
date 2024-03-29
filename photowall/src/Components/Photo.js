/**
 * Created by ramanathan on 01/02/18.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';

function Photo(props) {
    const post = props.post;
    return (
        <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description}/>
            <figcaption><p> {post.description}</p></figcaption>
            <div className="button-container">
                <button onClick={() => {
                    props.onRemovePhoto(post)
                }}>REMOVE</button>
            </div>
        </figure>
    )
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

// class Photo extends Component {
//     render() {
//         const post = this.props.post;
//
//     }
// }

export default Photo;