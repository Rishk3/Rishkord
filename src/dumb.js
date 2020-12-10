import React from 'react'
import "./css/login.css"
import {Button} from "@material-ui/core"
import { auth ,provider} from './firebase';
function Login() {

    const signIn=()=>{
        console.log("clicked")
        // auth.signInWithPopup(provider).then(result=>{
        //     console.log(result);
        // }).catch((err)=>{
        //     console.log(err.message);
        // })
    }

    return (
        <div className="login ">
             <Button onClick={signIn}>Sign In With Google</Button>
            <div className="pinkish__bg login__container">
            <img className="login__google" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt=""/>

               

            </div>
          
         
        </div>
    )
}

export default Login
