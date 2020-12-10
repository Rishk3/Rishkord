import React from 'react'
import {Avatar} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./css/header.css"
import { useStateValue } from './context_api/StateProvider';
function Header() {
    const [{user}]=useStateValue();
    return (
        <div className="header__border__bottom ">
            <div className="header">
            <div className="header__left">
                <Avatar className="header__avatar"      
                alt={user?.displayName}
                src={user?.photoURL}/>
                <p className="text-gradient-purple">{user?.displayName}</p>
                  {/* <QueryBuilderIcon/> */}
            </div>
            <div className="header__heading ">
            <p className="text-gradient">RISHKORD</p>
            </div>
            <div className="header__search">
                <div className="header__search__items">
                <SearchIcon/>
                <input placeholder="Search your fav Channel"/>
                </div>
               
            </div>
            <div className="github_icon">
             <GitHubIcon/>
            </div>
            </div>
           
            
        </div>
    )
}

export default Header
