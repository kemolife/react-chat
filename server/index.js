import config from './config.json';
import express from 'express';
import { Server } from 'http';
import socket from 'socket.io';
import Chat from './chat/chat';
import Logger from 'winston-console-graylog2-logger';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

const compiler = webpack(webpackConfig)

app.use(webpackMiddleware(compiler, {
    hot:true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

let http = Server(app);
let io = socket(http);
let port = 3000;

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

http.listen(port, '127.0.0.1', () => console.info('Chat App listening on 127.0.0.1:'+port));

config.logger = config.logger || {};

let graylog2Cnf = config.logger.graylog2 || {};

graylog2Cnf.enable = graylog2Cnf.enable || false;
graylog2Cnf.host = graylog2Cnf.host || '127.0.0.1';
graylog2Cnf.port = graylog2Cnf.port || '12201';
graylog2Cnf.facility = graylog2Cnf.facility || 'My NodeJS App';

let log = new Logger({
    enable: !!config.logger.enable,
    graylog2: {
        enable: graylog2Cnf.enable,
        host: graylog2Cnf.host,
        port: graylog2Cnf.port,
        facility: graylog2Cnf.facility
    }
});

new Chat(config, io, log);