import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import Chat from './Chat';

function Home() {
  return (
    <div className='HomeContent'>
        <Navbar/>
        <img className='HomeImage' src='../images/welcome1.jpg' alt='home' />
        <h1 className="heading1">Welcome!</h1>
        <h2 className="heading2">Recieve Career Help from ReX!</h2>
        <p className="para">Start a conversation with ReX right now!</p>
        <div className='Buttonpadding'>
        <a href='/Chat'><button className='HomeButton'>Start Chat with ReX</button></a>
        </div>
    </div>
  )
}

export default Home