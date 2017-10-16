import React from 'react';
import {Link} from 'react-router-dom';
import ChannelForm from './channels/channel-form';

class Channels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket : props.socket
        };
    }

    render() {
        const socket = this.state.socket;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="page-header">
                        <h2>Channel</h2>
                    </div>
                    <div className="col-md-4 col-md-offset-4">
                        <ChannelForm socket = {socket}/>
                    </div>
                    <Link to="/chat">xxx</Link>
                </div>
            </div>
        );
    }
}

export default Channels;
