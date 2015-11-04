import React, { Component } from 'react';

export default class ChatMessage extends React.Component {
    
  render() {
    var formattedDate = new Date(this.props.timeStamp).toUTCString().replace(" GMT","");
    var msgType, receivedAvatarClass, sentAvatarClass;
    
    //Custom classes/formatting based on sent/received message type
    if(this.props.received){
        msgType= "messages msg_receive";
        sentAvatarClass= " hidden";
        receivedAvatarClass = "col-md-2 col-xs-2 avatar avatar-received";
    }else{
        msgType="messages msg_sent";
        receivedAvatarClass = " hidden";
        sentAvatarClass= "col-md-2 col-xs-2 avatar avatar-sent";
    }
      
    return(
        <div className="message row">
            <div className={receivedAvatarClass}>
                <img src={this.props.userImg} className=" img-responsive " />
            </div>
            <div className="col-md-10 col-xs-10 message-body">
                <div className={msgType}>
                    <p>{this.props.message}</p>
                    <time>{this.props.user} • {formattedDate}</time>
                </div>
            </div>
            <div className={sentAvatarClass}>
                <img src={this.props.userImg} className=" img-responsive " />
            </div>
        </div>
    );
  }
}