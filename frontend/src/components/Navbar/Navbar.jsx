import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = ({setLogin}) => {
    const [menu,setMenu]=useState('Home')
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="logo" className='logo' height={140} width={150} />
            <ul className='navbar-menu'>
                <Link to='/' onClick={()=>setMenu('Home')} className={menu==='Home'?'active':''}>Home</Link>
                <a href='#explore-menu' onClick={()=>{setMenu('Menu')}} className={menu==='Menu'?'active':''}>Menu</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="basket" />
                    <div className="dot"></div>
                </div>
                <button onClick={()=>setLogin(true)}>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar