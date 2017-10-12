import React from 'react';
import User from '../user'

class App extends React.Component {

	constructor(prop){
		super(prop);
		this.state = {
			data: 'olia'
		};
        new User((err, data) => this.setState({
            data
        }));
	}

	render() {
		return (
			<h1>{this.state.data}</h1>
		);
	}
}

export default App;