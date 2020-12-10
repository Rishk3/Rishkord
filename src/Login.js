import React from 'react'
import "./css/login.css"
import {Button} from "@material-ui/core"
import { auth ,provider} from './firebase';
import { useStateValue } from './context_api/StateProvider';
import {actionTypes} from "./context_api/reducer"

function Login() {
    const [state,dispatch]=useStateValue();
    const signIn=()=>{
        console.log("clicked")
        auth.signInWithPopup(provider).then(result=>{
            console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        }).catch((err)=>{
            console.log(err.message);
        })
    }

    return (
        
<div className="login__container pinkish__bg" onClick={signIn}>
<img className="login__google" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt=""/>

           <Button >Sign In With Google</Button>
        </div>
        
        
    )
}

export default Login
