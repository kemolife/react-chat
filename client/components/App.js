import React from 'react';
import Chat from './Chat';
import Channels from './Channels';
import {Switch, Route} from 'react-router-dom'
import openSocket from 'socket.io-client';

class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            socket: openSocket.connect()
        }
    }

    render() {
        const socketConnect = this.state.socket;
        return (
            <Switch>
                <Route path="/chat" component={Chat} />
                <Route path="/" render={() => <Channels socket={socketConnect}/>} />
            </Switch>
        );
    }
}

export default App;