import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
        <div className='LeftPortion'>
        <a href='/Home'><div className='imgpadding'><img className='NavImg' src="../Images/logo_1.jpg" alt="logo" /></div></a>
            <h2 className='NavHeading'>ReX</h2>
        </div>
        <div className='RightPortion'>
            <a  href='/Chat' className='NavPara'><img src="../Images/msg.png" alt="msg" /> </a>
            <a href='/Setting' className='NavPara'><img src="../Images/setting.png" alt="setting" /> </a>
        </div>
    </nav>
  )
}

export default Navbar;