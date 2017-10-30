import React from 'react';
import ChannelsService from './../../services/channels';
import User from './../../services/user';
import {Redirect} from 'react-router-dom';

export default class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            channel: new ChannelsService(props.socket),
            channelName: '',
            channelPass: '',
            user: new User(props.socket),
            username: '',
            error: '',
            redirect: false
        };
        this.handleCreateChannel = this.handleCreateChannel.bind(this);
        this.handleJoinChannel = this.handleJoinChannel.bind(this);
    }

    componentWillMount() {
        const user = this.state.user;
        user.users((err, user) => this.setState(
            {'user': user}
        ));
    }

    handleCreateChannel(e) {
        let name = this.refs.name.value,
            pass = this.refs.password.value;
        this.setState({
            error: ''
        });
        if (name !== '' && pass !== '') {
            const channel = this.state.channel;
            channel.joinedChannel(name, pass, (err, channel) => this.setState(
                {'channelName': channel.name}
            ));
            this.setState({
                redirect : true
            })
        } else {
            this.setState({
                error: 'Please check all fields'
            })
        }
    }

    handleJoinChannel(e) {
        const channel = this.state.channel,
            user = this.state.user;
        channel.joinChannel(user, 'kemo2', 'kemo');
    }

    render() {
        const user = this.state.user;
        return (
            <div>
                {this.state.redirect ?
                    (<Redirect to={{
                        pathname: '/chat',
                        state: { user:  user}
                    }}
                    />)
                    :
                    (<div>
                        <h1>{this.state.user.name}</h1>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="alert alert-danger">{this.state.error}</div>
                                <div className="form-group">
                                    <label htmlFor="name">Channel Name</label>
                                    <div className="input-group">
                                        <span className="input-group-addon">#</span>
                                        <input type="text"
                                               id="name"
                                               ref="name"
                                               autoFocus
                                               autoComplete="off"
                                               className="form-control"
                                               placeholder="Channel Name"
                                               required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="password">Channel Password</label>
                                    <small>Leave blank for a public channel</small>
                                    <input type="password"
                                           id="password"
                                           ref="password"
                                           autoComplete="off"
                                           className="form-control"
                                           placeholder="Channel Password"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <button className="btn btn-block btn-primary" onClick={this.handleCreateChannel}>
                                    Create
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-block btn-success" onClick={this.handleJoinChannel}>
                                    Join
                                </button>
                            </div>
                        </div>
                    </div> )}
            </div>
        )
    }
}