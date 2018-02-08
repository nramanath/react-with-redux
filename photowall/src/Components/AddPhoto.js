/**
 * Created by ramanathan on 07/02/18.
 */


import React, {Component} from 'react';


class AddPhoto extends Component {
    render() {
        return (
            <div>
                <h1>Photowall</h1>
                <div className="addPhotoForm">
                    <form>
                        <input type="text" placeholder="Link"/>
                        <input type="text" placeholder="Description"/>
                        <button> POST </button>
                    </form>
                </div>
            </div>

        )
    }
}


export default AddPhoto;