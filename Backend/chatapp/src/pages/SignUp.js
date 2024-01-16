import React from 'react'
import "./SignUp.css";

function SignUp() {
  return (
    <div className='SignUppage'>
        <div className='innersignup'>
            <h1>Sign Up</h1>
            <input className='Input' type='text' placeholder='Username'/>
            <input className='Input' type='Password' placeholder='Password'/>
            <button className='HomeButton' >Sign Up</button>
            <p className='bottomcontent'>Already have Account? <a href='/SignIn'><span className='Bluecolor'>SignIn</span></a></p>
        </div>
    </div>
  )
}

export default SignUp;