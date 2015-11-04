# react-node-chat
A sample chat application communicating over websockets and using react components.

![Demo](https://github.com/dani5447/react-node-chat/blob/master/react-node-chat-demo.gif)

## Tech Stack
* Node.js backend
* Express for enhanced node web app features
* React for enhanced view and modularity
* Socket.io for socket-based communication
* Babel, Browserfiy, Gulp, etc for ES6

## Running the App
* Clone the repository locally
* Run `npm install`
* Run `npm start`
* Navigate to http://localhost:8080/index.html on two different tabs and refresh each to generate random new user IDs
* Chat with yourself!

## Usage/Modifiability
The component was designed with a React/Node stack in mind.

Currently the chat randomly assigns a username and user picture to users upon login and stores this data in cookies. In more robust applications you may assign/store user info in cookies and reference that for that chat.

You may also wish to abstract out the port the socket listens on and change that.
