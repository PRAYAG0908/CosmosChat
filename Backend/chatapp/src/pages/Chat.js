import React from 'react';
import Navbar from '../components/Navbar';
import './Chat.css';

function Chat() {
  return (
   <div className='ChatPage'>
    <Navbar/>
    <h1>Chats</h1>
    <div className='ChatInnerDiv'>
      <img className='chatimg' src='../Images/logo_1.jpg' alt='logo'/>
      <p className='botChat'>Hello Prayag,ReX here!</p>
      <div className='usrChat1'><p className='usrChat'>Hello ReX</p></div>
    </div>
   </div>
  )
}

export default Chat;