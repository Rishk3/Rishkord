import React from 'react'
import "./css/message.css"
function Message({message,timestamp,userImage,user}) {
    return (
        <div className="messages">
            <img src={userImage} alt="user"/>
            <div className="messages__info">
    <h4>{user} <span className="messages__timestamp">
    {(new Date(timestamp?.toDate())).toUTCString()}
    {/* {(new Date()).toUTCString()} */}
    
        </span> 
   </h4>
    <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
