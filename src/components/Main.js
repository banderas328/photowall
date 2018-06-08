import React, {Component} from 'react';

// import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom'
import {RemovePost} from '../redux/actions'


class Main extends Component {

    constructor() {
        super()
        this.state = {
            posts: [],
        }


    }

    render() {
        return (<div>
            <h1><Link to='/'>Photowall</Link></h1>
            <Route exact path='/' render={() => (
                <div>
                    {/*<Title message={"Photowall"}/>*/}
                    <PhotoWall {...this.props}/>

                </div>
            )}/>
            <Route path="/addPhoto" render={({history}) => (
                <AddPhoto  {...this.props} onHistory={history}/>

            )}/>

        </div>)
    }
}


export default Main