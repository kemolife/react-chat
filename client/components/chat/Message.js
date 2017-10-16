import React from 'react'

export default class Message extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            user: prop.user
        }
    }

    render() {
        return (
            <div className="input-group">
                <input id="messageinput"
                       type="text"
                       className="form-control"/>
                <span className="input-group-btn">
                    <button className="btn btn-primary">Send</button>
                </span>
            </div>
        )
    }

}
