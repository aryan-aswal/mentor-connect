import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
    const [roomid,setroomid]=useState("");
    const navigate=useNavigate()
    const handlechange=()=>{
       navigate(`/room/${roomid}`)
    }
  return (
    <div className='App'>
     <input placeholder='enter your roomid' type='text' value={roomid} onChange={(e)=>setroomid(e.target.value)}></input>
    <button onClick={handlechange}>JOIN</button>
    </div>
  )
}

export default Home
