import React from 'react'
import { useState } from 'react'


function Signup() {
const [name,setName]=useState("");
const [password,setPasssword]=useState("");
const [email,setEmail]=useState("");
const collectData=()=>{
    console.warn(name,email,password);
}
  return (
    <div className="register">
      <h1>Resgister Here</h1>
      <input  className="inputbox" type="text" placeholder="Enter Name"  value={name} onChange={(e)=>setName(e.target.value)}/>
      <input className="inputbox" type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input className="inputbox" type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPasssword(e.target.value)}/>
      <button type="button" onClick={collectData}>Sign Up</button>
    </div>
  )
}

export default Signup
