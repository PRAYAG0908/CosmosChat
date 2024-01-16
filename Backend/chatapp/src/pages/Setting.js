import React from 'react'
import Navbar from '../components/Navbar';
import './Setting.css';

function Setting() {
  return (
    <div  className='setting'>
        <Navbar/>
        <h1 className='SettingHeading'>Settings</h1>
        <div className='editProfile'></div>
        <div className='settingmenublock'>
        <button className='settingmenu' id='settingmenu1'>Edit Profile</button>
        <button className='settingmenu' id='settingmenu2'>Logout</button></div>
    </div>
  )
}

export default Setting;