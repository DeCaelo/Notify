'use strict';

const http = require ('http').createServer().listen(3000);
const io = require ('socket.io')(http);

io.on('connection', (s) => {
    console.log('connected');
});

