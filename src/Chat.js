import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import "./css/chat.css"
import db from './firebase';
import Message from './Message';
import ChatInput from './ChatInput';
function Chat() {
    const {roomId} =useParams();
    const [roomDetails, setroomDetails] = useState(null)
    const [roomMessages, setroomMessages] = useState([])
    
useEffect(() => {
   if(roomId){
       db.collection("rooms").doc(roomId)
       .onSnapshot(snapshot=>{
         setroomDetails(snapshot.data())
       })
   }
  db.collection("rooms").doc(roomId)
     .collection("messages")
     .orderBy("timestamp","asc")
     .onSnapshot((snapshot)=>{
         setroomMessages(snapshot.docs.map(doc=>doc.data()))
     }
         
     )

}, [roomId])
console.log("details",roomDetails);


    return (
        <div className="chat ">
            <p className="chat__roomId">You are in {roomDetails?.name} room</p>
            <div className="chat__header">
                <div className="chat__header__left">
<h4 className="chat__channel__name">
    <strong>#{roomDetails?.name}</strong>
    <StarBorderOutlinedIcon/>
</h4>
                </div>
                <div className="chat__header__right">
          <p>
<InfoOutlinedIcon/> Details
          </p>
                </div>
            </div>
        <div className="chat__messages">
            {roomMessages.map(({message,timestamp,user,userImage})=>(
                <Message
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}/>
            ))}
            <Message/>
        </div>

        <ChatInput channelName={roomDetails?.name} channelId={roomDetails?.id}/>
        
        </div>
    )
}

export default Chat
