import { Button } from '@material-ui/core'
import React,{useState} from 'react'
import { useStateValue } from './context_api/StateProvider'
import { useParams } from 'react-router-dom'
import "./css/chatInput.css"
import db from "./firebase"
import firebase from "firebase"

function ChatInput({channelName,channelId}) {
    const [input, setinput] = useState("")
    const {roomId} =useParams();
const [{user}] =useStateValue();

    const sendMessage= async (e)=>{
        e.preventDefault();
      //  console.log("database print",db.collection("rooms").doc(roomId).collection("messages").);
      if(roomId){
          const data={
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,
            userImage:user.photoURL
        }
        const res= await db.collection("rooms").doc(roomId).collection("messages").add(data)
        console.log('Added document with ID: ', res.id);
      }
      
    }
    console.log("roomid",roomId)

    return (
        <div className="chatInput">
            <form className="chatInput__form">
                <input
                value={input}
                onChange={e=>{
                    setinput(e.target.value)
                }}
                 placeholder={`Message #${channelName?.toLowerCase()}`}/>
                <Button type="submit" onClick={sendMessage}>Send</Button>
                
            </form>
        </div>
    )
}

export default ChatInput
