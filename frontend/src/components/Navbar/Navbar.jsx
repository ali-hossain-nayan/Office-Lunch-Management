import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
const Navbar = () => {
    const [menu,setMenu]=useState('Home')
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="logo" className='logo' height={140} width={150} />
            <ul className='navbar-menu'>
                <li onClick={()=>setMenu('Home')} className={menu==='Home'?'active':''}>Home</li>
                <li onClick={()=>{setMenu('Menu')}} className={menu==='Menu'?'active':''}>Menu</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="basket" />
                    <div className="dot"></div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar