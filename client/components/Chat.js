import React from 'react';
import {Message, Text, Title, Users} from './chat/index'

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: new User(props.socket),
            username: ''
        };
    }

    render() {

        const username = this.state.username;
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
