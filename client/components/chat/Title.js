import React from 'react'

export default class Title extends React.Component
{
    constructor(prop){
        super(prop);
        this.state = {
            user : prop.user
        }
    }
}
