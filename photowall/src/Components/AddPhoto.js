/**
 * Created by ramanathan on 07/02/18.
 */


import React, {Component} from 'react';


class AddPhoto extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const imageDescription = event.target.elements.description.value;
        const post =
            {
                id: "0",
                description: imageDescription,
                imageLink: imageLink
            }
        if (imageLink && imageDescription) {
            this.props.onAddPhoto(post);
        }
    }

    render() {
        return (
            <div>
                <h1>Photowall</h1>
                <div className="addPhotoForm">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button> POST</button>
                    </form>
                </div>
            </div>

        )
    }
}


export default AddPhoto;