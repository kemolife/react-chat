export default class Channels {
    constructor(socket) {
        this.socket = socket;
    }

    createChannel(name, pass) {
        return this.socket
            .emit('create channel', {
                name: name,
                password: pass
            })
    }

    joinedChannel(name, pass, channel) {
        this.createChannel(name, pass).on('joined channel',
            data => channel(null, data)
        );
    }


    joinChannel(user, name, pass) {
        this.socket.emit('join channel', user, {
            name: name,
            password: pass
        })
    }
}
