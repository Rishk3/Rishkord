import React from 'react'
import "./css/sidebarOption.css"
import {useHistory} from "react-router-dom"
import db from './firebase';
function SidebarOption({Icon,title,id,addChannelOption}) {
    const history=useHistory();
const selectChannel=()=>{
    if(id){
history.push(`/room/${id}`)
    }
    else{
        history.push('home')
    }
}
const addChannel=()=>{
    const channelName=prompt('please enter the channel name')
    if(channelName){
        db.collection('rooms').add({
            name: channelName,
        })
    }
}
const handleClick=()=>{
if(addChannelOption==="yes"){
    addChannel();}
    else{
        selectChannel();
    }
}

    return (
        <div className="sidebarOption" onClick={handleClick}>
            {Icon && <Icon className="sidebarOption__icon"/>}
            { Icon ?(
                <p>{title}</p>
            ):(
            <p className="sidebarOption__channel"><span className="sidebarOption__hash">#</span> {title}</p>
            )}
        </div>
    )
}

export default SidebarOption
