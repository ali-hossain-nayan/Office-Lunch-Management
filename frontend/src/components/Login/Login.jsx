import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
const Login = ({ setLogin }) => {
    const [currentState, setCurrentState] = useState('Sign Up')
    return (
        <div className="login">
            <form action="" className="login-container">
                <div className="login-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="cross" />
                </div>
                <div className="login-inputs">
                    {currentState === 'Login' ? <></> : <input type='text' placeholder='Enter your name' required />}
                    <input type="email" placeholder='Enter your email' required />
                    <input type="password" placeholder='Enter your password' required />
                </div>
                <button>{currentState === 'Sign Up' ? 'Create account' : 'Login'}</button>
                <div className="login-condition">
                    <input type="checkbox"required />
                    <p>By continuing, I agree with terms and use policy.</p>
                </div>
                {currentState==='Login'?
               <p>Don't have an account? <span onClick={()=>setCurrentState('Sign Up')}>Sign Up</span></p>  :
               <p>Already have an account? <span onClick={()=>setCurrentState('Login')}>Login</span></p>  
            }
            </form>
        </div>
    )
}

export default Login