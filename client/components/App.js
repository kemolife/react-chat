import React from 'react';
import socket from 'socket.io-client';

class App extends React.Component {

	constructor(prop){
		super(prop);
		this.state = {
			socket : socket,
			name: 'olia'
		}
	}

	componentDidMount(){

        this.state.socket.connect().emit('create user')
			.on('user created', (data) => {
            this.setState({
                name: data.username
            });
        })
	}

	render() {
		return (
			<h1>{this.state.name}</h1>
		);
	}
}

export default App;