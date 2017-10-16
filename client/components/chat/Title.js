import React from 'react';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
        }
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({username: nextProps.username})
    }

    render() {
        const username = this.state.username;
        return (
            <div>
                <h2 className="channel">
                    Channel {username}
                    <button className="btn btn-sm btn-primary">
                        Leave
                    </button>
                </h2>
            </div>
        )
    }
}
