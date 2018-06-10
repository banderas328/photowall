import React, {Component} from 'react';

// import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom'
import {RemovePost} from '../redux/actions'
import Single from './Single'


class Main extends Component {
    state = {loading : true}

    componentDidMount() {

        this.props.startLoadingPost().then(() => {

            this.setState({loading: false})
        })
        this.props.startLoadingComments()
    }

    // constructor() {
    //     super()
    //     this.state = {
    //         posts: [],
    //     }
    //
    //
    // }

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
             <Route path='/single/:id' render = {(params) =>(
                   <Single loading={this.state.loading} {...this.props} {...params} />

             )} />
        </div>)
    }
}


export default Main