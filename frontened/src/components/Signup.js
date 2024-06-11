import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  

  const navigate=useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
      navigate('/');
    }
  })

  const collectData=async ()=>{
    console.log(name,email,password);
    let result=await fetch('http://localhost:5000/register',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-type':'application/json'
      },
    });
    result=await result.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result.result));
    localStorage.setItem("token",JSON.stringify(result.auth));
    if(result){
   navigate('/');
    }
  }
  return (
    <div className="register">
      <h1>Register Here</h1>
      <input
        className="inputbox"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="inputbox"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputbox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={collectData}>Sign Up</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Signup;
