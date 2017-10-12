import openSocket from 'socket.io-client';
const  socket = openSocket.connect();

export default class User
{
    constructor(app)
    {
        socket.emit('create user').on('user created', data => app(null, data.username));
    }
}

// function subscribeToTimer(cb) {
//     socket.emit('create user').on('user created', data => cb(null, data.username));
// }
// export { subscribeToTimer };
