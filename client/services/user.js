export default class User
{
    constructor(socket)
    {
        this.socket = socket
    }

    createUser()
    {
        return this.socket.emit('create user');
    }

    users(app)
    {
        this.createUser().on('user created', data => app(null, data))
    }
}

