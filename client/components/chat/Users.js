import React from 'react'

export default class Users extends React.Component
{
    constructor(prop){
        super(prop);
        this.state = {
            username : prop.username
        }
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({username: nextProps.username})
    }

    render()
    {
        const username = this.state.username;
        return (
            <div className="col-md-2 chatusers text-center hidden-sm hidden-xs">
                <span><strong>Users:</strong></span><br/>
                <span>{username}<br/></span>
            </div>
        )
    }

}
