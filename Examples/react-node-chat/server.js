import express from 'express';
import path from 'path';
import socketio from 'socket.io';
import http from 'http';

const server = express();

server.use(express.static(__dirname + '/dist'));
server.get('/', function (req, res) {
    res.redirect('/index.html');
});

//Chat server 
var chatServer = http.createServer(server);
var io = socketio.listen(chatServer);

//Server events
io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('a user disconnected');
	});
	socket.on('messageAdded', function(message) {
		socket.broadcast.emit('messageAdded', message); // broadcast to all but the sender
	});
})

chatServer.listen(8080);
console.log("Server listening at port 8080");