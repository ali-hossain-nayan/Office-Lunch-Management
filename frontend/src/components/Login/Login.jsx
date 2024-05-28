import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/contextStore'
import axios from 'axios'


const Login = ({ setLogin }) => {
    const { url, setToken } = useContext(StoreContext)
    const [currentState, setCurrentState] = useState('Sign Up')
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {

        event.preventDefault();
        let takeUrl = url;

        if (currentState === 'Login') {
            takeUrl += "/api/user/login";
        } else {
            takeUrl += "/api/user/register";
        }

        const callApi = await axios.post(takeUrl, data);
        if (callApi.data.success) {
            setToken(callApi.data.token)
            localStorage.setItem("token", callApi.data.token);
            setLogin(false);
        } else {
            alert(callApi.data.message);
        }
    }


    return (
        <div className="login">
            <form action="" onSubmit={onLogin} className="login-container">
                <div className="login-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="cross" />
                </div>
                <div className="login-inputs">
                    {currentState === 'Login' ? <></> : <input type='text' name='name' onChange={onChangeHandler} value={data.name} placeholder='Enter your name' required />}
                    <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Enter your email' required />
                    <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Enter your password' required />
                </div>
                <button type='submit'>{currentState === 'Sign Up' ? 'Create account' : 'Login'}</button>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree with terms and use policy.</p>
                </div>
                {currentState === 'Login' ?
                    <p>Don't have an account? <span onClick={() => setCurrentState('Sign Up')}>Sign Up</span></p> :
                    <p>Already have an account? <span onClick={() => setCurrentState('Login')}>Login</span></p>
                }
            </form>
        </div>
    )
}

export default Login