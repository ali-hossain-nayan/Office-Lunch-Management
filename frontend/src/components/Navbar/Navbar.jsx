import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../context/contextStore'
import { Profiler } from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar = ({ setLogin }) => {


    const [menu, setMenu] = useState('Home')
    const { token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/")

    }


    return (
        <div className='navbar'>
            <Link to='/'>
                <img src={assets.logo} alt="logo" className='logo' height={140} width={150} />
            </Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>Home</Link>
                <a href='#explore-menu' onClick={() => { setMenu('Menu') }} className={menu === 'Menu' ? 'active' : ''}>Menu</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search" />
                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        <img src={assets.basket_icon} alt="basket" />
                    </Link>
                    <div className="dot"></div>
                </div>
                {!token ? <button onClick={() => setLogin(true)}>Sign in</button>
                    : <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="profile" />
                        <ul className="nav-profile-dropdown">
                            <li><img src={assets.bag_icon} alt="" /><p>Choose Menu</p></li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                        </ul>

                    </div>
                }

            </div>
        </div>
    )
}

export default Navbar