import React,{useState,useEffect} from 'react'
import "./css/sidebar.css"
import CreateIcon from "@material-ui/icons/Create"
import SidebarOption from './SidebarOption'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from "./firebase"
import { useStateValue } from './context_api/StateProvider';
function Sidebar() {
      const [channels, setchannels] = useState([]);
      const [{user}]=useStateValue();
      useEffect(()=>{
           db.collection('rooms').onSnapshot(snapShot=>{
               setchannels(snapShot.docs.map(doc=>({
                   id: doc.id,
                   name: doc.data().name,
               })))
           })
      },[])
console.log("channels",channels)

    return (
        <div className="sidebar">
            <div className="sidebar__info ">
<div className="sidebar__info__title">
    <h3>{user?.displayName}</h3>
</div>

<CreateIcon/>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Inbox"/>
            <SidebarOption Icon={DraftsIcon} title="Saved"/>
            <SidebarOption Icon={BookmarkIcon} title="Bookmarks"/>
            <SidebarOption Icon={PeopleAltIcon} title="People"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File Browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show Less"/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <SidebarOption Icon={AddIcon} addChannelOption="yes" title="Add Channel"/>
            <hr/>
           {channels.map(channel=>(
               <SidebarOption title={channel.name} key={channel.id} id={channel.id} />
           ))}
        </div>
    )
}

export default Sidebar
