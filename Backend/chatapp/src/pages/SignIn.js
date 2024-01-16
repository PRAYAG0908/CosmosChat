import React from 'react';

function SignIn() {
  return (
    <div className='SignUppage'>
        <div className='innersignup'>
            <h1>Sign In</h1>
            <input className='Input' type='text' placeholder='Username'/>
            <input className='Input' type='Password' placeholder='Password'/>
            <button className='HomeButton' >Sign In</button>
            <p className='bottomcontent'>Don't have Account? <a href='/SignUp'><span className='Bluecolor'>SignUp</span></a></p>
        </div>
    </div>
  )
}

export default SignIn;