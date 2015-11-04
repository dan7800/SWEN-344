import React, { Component } from 'react';
import ChatMessage from './chat-message';

var socket = io.connect('http://localhost:8080');
var that;

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages:[{
                timeStamp: Date.now(),
                user: 'SYSTEM',
				text: "Welcome to the test chat app!",
                userImgSrc: '../../images/defaultUserImage.png', 
                received: true
            }]
        }
        that = this;
        
        this.assignRandomUserInfo();
      }
    
    assignRandomUserInfo(){
        //Random user number between 1 and 5 inclusive
        var randomUserID = Math.floor(Math.random()*(5-1+1)+1);
        console.log("user has id " + randomUserID);
        
        that.username = "User"+randomUserID;
        that.userPictureSrc="../../images/user"+randomUserID +".png";
    }
    
    componentDidMount() {
        // register event handler for new messages received from server
		socket.on('messageAdded', this.onMessageAdded);
        
        //listen for chat minimize/maximize
        var input = document.getElementById('minim_chat_window');
        var messageList = document.getElementById('message-list');
        var panelFooter = document.getElementById('panel-footer');
        
        input.addEventListener("click", function(e){ 
            if (!input.classList.contains('panel-collapsed')) {
                input.classList.add('panel-collapsed');
                input.classList.remove('glyphicon-minus');
                input.classList.add('glyphicon-plus');
                messageList.classList.add('hidden');
                panelFooter.classList.add('hidden');
            } else {
                input.classList.remove('panel-collapsed');
                input.classList.remove('glyphicon-plus');
                input.classList.add('glyphicon-minus');
                messageList.classList.remove('hidden');
                panelFooter.classList.remove('hidden');
            }
        });
	}
	onMessageAdded(message) {
		// update the array (setState re-renders the component)
        message.received = true;
		that.setState({messages: that.state.messages.concat(message)});
	}
    
    getCookieValue(cname){
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
    
    getRandomUserValues(cname){
        if(cname=="username"){
            return that.username;
        } else{
            return that.userPictureSrc;   
        }
    }
    
	postIt(e) {
        // prevent form submission which reloads the page
		e.preventDefault();
 
		// get the message
		var input = document.getElementById('message-input');
		var message = {
			timeStamp: Date.now(),
            user: that.getRandomUserValues("username"), //Replace with getCookieValue in actual usage
			text: input.value, 
            userImgSrc: that.getRandomUserValues("userPictureSrc"), //Replace with getCookieValue in actual usage
            received: false
		};
 
		// add it locally for this client
		that.setState({messages: that.state.messages.concat(message)});
		/**
		 * Alternatively you could have the server emit to ALL clients,
		 * including the one who sent the message. In that case the message
		 * would go from your client to the server and back before it got added
		 * to the message list. 
		 */
 
		// clear the input
		input.value = "";
 
		// emit to server so other clients can be updated
		socket.emit('messageAdded', message);
	}
    
    render() {
        var messages = this.state.messages
        .map((e) => {
          return (<ChatMessage key={e.timeStamp} user={e.user} message={e.text} timeStamp={e.timeStamp} userImg={e.userImgSrc} received={e.received}/>);
        });
            
        return (
            <div className="row chat-window col-xs-5 col-md-3" id="chat_window_1">
                <div className="col-xs-12 col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading top-bar">
                            <div className="col-md-8 col-xs-8">
                                <h3 className="panel-title"><span className="glyphicon glyphicon-comment"></span> Chat</h3>
                            </div>
                            <div className="col-md-4 col-xs-4 minimize-chat-div">
                                <a href="#"><span id="minim_chat_window" className="glyphicon glyphicon-minus icon_minim"></span></a>
                            </div>
                        </div>
                        
                        <div className="message-list container-fluid" id="message-list">
                            {messages}
                        </div>
                        <div className="panel-footer" id="panel-footer">
                            <form onSubmit={this.postIt}>
                                <input type="text" id="message-input" placeholder="Type your message here" />
                                <button>Send</button>
                            </form>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}