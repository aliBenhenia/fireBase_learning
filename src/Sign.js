import React, { useEffect, useState } from 'react'
import { signInWithPopup} from "firebase/auth";
import { auth,provider } from './conf';
import  Home  from "./Home"
export default function Sign() {
    const [v,setV] = useState('');
    const [n,setN] = useState('');
    const [i,setI] = useState('');
    const handleSign = ()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setV(data.user.email);
            setN(data.user.displayName);
            setI(data.user.photoURL);
            console.log(data.user);
            localStorage.setItem("email",data.user.email);
            localStorage.setItem("name",data.user.displayName);
            localStorage.setItem("img",data.user.photoURL);
        })
    }
    useEffect(()=>{
        setV(localStorage.getItem("email"))
        setN(localStorage.getItem("name"))
        setI(localStorage.getItem("img"))
    },[])
  return (
    <div>
        {v ? <Home name = {n} img = {i} mail = {v}/> : 
            <button onClick={handleSign}>sign in with google</button>
        } 
   </div>
  )
}
