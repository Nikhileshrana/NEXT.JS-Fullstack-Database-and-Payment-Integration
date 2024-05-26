"use client"
import React, { useState } from 'react'
import axios from "axios"
import Payments from "./components/Payment"

const page = () => {
  const [meradata, setmeradata] = useState([]);
  const [userdetailspostlogin, setuserdetailspostlogin] = useState([]);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");


  const signup = async () => {
    const response = await axios.post('/api/signup', {name:name, age:age, email:email , username:username , password:password});
    setmeradata(response.data);
  }

  const login =async()=>{
    const response = await axios.post('/api/login', {email:email , password:password});
    setmeradata(response.data);
    console.log(response.data.userdata);
    setuserdetailspostlogin(response.userdata);
    
  }

  return (
    <>

    <input type="text" placeholder='Name' onChange={(e)=>{setname(e.target.value)}}/>
    <input type="mail" placeholder='Email' onChange={(e)=>{setemail(e.target.value)}}/>
    <input type="number" placeholder='Age' onChange={(e)=>{setage(e.target.value)}}/>
    <input type="text" placeholder='Username' onChange={(e)=>{setusername(e.target.value)}}/>
    <input type="password" placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}}/>

    <div>
      <button onClick={signup}>Submit Data</button>
    </div>

    <div>{meradata.data}</div>




    <br /><br /><br /><br /><br /><br />

    <div>LOGIN</div>
    <input type="text" placeholder='User Email' onChange={(e)=>{setemail(e.target.value)}}/>
    <input type="password" placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}}/>
    
    <button onClick={login}>Login</button>
    <div>{meradata.data}</div>



    <br /><br /><br /><br /><br /><br /><br />

    <Payments></Payments>

    </>
  )
}

export default page