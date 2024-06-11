import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    const navigate=useNavigate();
    const handleLogin= async ()=>{
        console.log(email,password);
        let result=await fetch("http://localhost:5000/login",{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-type':'application/json'
      },
        });
        result=await result.json();
        console.warn(result);
        if(result.auth){
localStorage.setItem("user",JSON.stringify(result.user));
localStorage.setItem("token",JSON.stringify(result.auth));
navigate("/");
        }
        else{
            alert("please provide correct details");
        }
    }
  return (
    <div className='login'>
    <input value={email} className="inputbox" type="email" placeholder='enter email' onChange={(e)=>setEmail(e.target.value)}></input>
    <input value={password} className="inputbox" type="password" placeholder='enter password' onChange={(e)=>setpassword(e.target.value)}></input>
    <button onClick={handleLogin} className='btn' type="button">Login</button>
    </div>
  )
}

export default Login
