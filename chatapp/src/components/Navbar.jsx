import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
        <div className='LeftPortion'>
            <div className='imgpadding'><img className='NavImg' src="../Images/logo_1.jpg" alt="logo" /></div>
            <h2 className='NavHeading'>ReX</h2>
        </div>
        <div className='RightPortion'>
            <p className='NavPara'><img src="../Images/messenger.png" alt="msg" /> </p>
            <p className='NavPara'><img src="../Images/setting.png" alt="setting" /> </p>
        </div>
    </nav>
  )
}

export default Navbar;