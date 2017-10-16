import React from 'react'

export default class Text extends React.Component
{
    constructor(prop){
        super(prop);
        this.state = {
            user : prop.user
        }
    }

    render()
    {
        return (
            <div className="col-md-10 chattext">
                <div className="chat_container">
                    <div className="chat_contents">

                    </div>
                </div>
            </div>
        )
    }

}
