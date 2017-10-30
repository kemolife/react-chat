import React from 'react';
import {Message, Text, Title, Users} from './chat/index'
import User from "../services/user";

class Chat extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            user: props.location.state.user,
            username: ''
        };
    }

    render() {
        console.log(this.state.user);
        const username = this.state.user.username;
        return (
            <div className="row">
                <div className="col-md-12">

                    <div className="page-header">
                        <Title username={username}/>
                    </div>

                    <div className="row">
                        <Text text="chatText">

                        </Text>
                        <Users
                            username={username}>
                        </Users>
                    </div>

                    <div className="row">
                        <Message
                            username="user.username"
                            focus-send-message="focusSendMessage">
                        </Message>
                    </div>

                </div>
            </div>
        );
    }
}

export default Chat;
