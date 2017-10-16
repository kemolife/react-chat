import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Chat from './../components/Chat';
import Channels from './../components/Channels';

class Routers extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Channels}/>
                    <Route path='/chat' component={Chat}/>
                </Switch>
            </div>
        )
    }
}
export default Routers