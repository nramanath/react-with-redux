/**
 * Created by ramanathan on 31/01/18.
 */

import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
const posts = [{
    id: "0",
    description: "BEAUTIFUL LANDSCAPE",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    "3919321_1443393332_n.jpg"
}, {
    id: "1",
    description: "ALIENS?!?!",
    imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
    "08323785_735653395_n.jpg"
}, {
    id: "2",
    description: "ON A VACATION!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
}]

class Main extends Component {

    constructor() {
        super()
        this.state = {
            posts: []
        }

        this.removePhoto = this.removePhoto.bind(this);
        console.log('constructor');
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState((state) => ( {
            posts: state.posts.filter((post) => ( post !== postRemoved))
        }))
    }

    componentDidMount() {
        const data = this.SimulateFetchFromDatabaseOrApiCall();
        this.setState({
            posts: data
        })
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        // alert('re-render');
        console.log(prevState.posts)
        console.log(this.state)

    }

    render() {
        console.log('render');
        return (
            <div>
                <Route exact path="/" render = {
                    () => (
                        <div>
                            <Title title={'Photowall'}/>
                            <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>
                        </div>
                    )}/>
                <Route path="/AddPhotos" component={AddPhoto}/>
            </div>
        )
    }

    SimulateFetchFromDatabaseOrApiCall() {
        return ([{
            id: "0",
            description: "BEAUTIFUL LANDSCAPE",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
        }, {
            id: "1",
            description: "ALIENS?!?!",
            imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
            "08323785_735653395_n.jpg"
        }, {
            id: "2",
            description: "ON A VACATION!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]);
    }
}

export default Main;
