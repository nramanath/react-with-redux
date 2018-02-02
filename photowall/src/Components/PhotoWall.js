/**
 * Created by ramanathan on 01/02/18.
 */

import React, {Component} from 'react';
import Photo from "./Photo";


function PhotoWall(props) {
    return (
        <div className="photoGrid">
            {props.posts.map((post, index) => <Photo post={post} key={index}/>)}
        </div>
    )
}

// class PhotoWall extends Component {
//     render() {
//
//     }
// }

export default PhotoWall;
