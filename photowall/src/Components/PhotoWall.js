/**
 * Created by ramanathan on 01/02/18.
 */

import React, {Component} from 'react';
import Photo from "./Photo";

class PhotoWall extends Component {
    render() {
        return (
            <div className="photoGrid">
                {this.props.posts.map((post, index) => <Photo post={post} key={index}/>)}
            </div>
        )
    }
}

export default PhotoWall;
