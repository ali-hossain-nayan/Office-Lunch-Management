import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'
const Footer = () => {
    return (
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="logo" height={140} width={150} />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum at aut aliquid similique minima culpa vero cumque ut
                        veniam asperiores? Exercitationem soluta at adipisci possimus officiis incidunt dolore. Quas, culpa!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="facebook" />
                        <img src={assets.linkedin_icon} alt="linkedin" />
                        <img src={assets.twitter_icon} alt="twitter" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>company</h2>
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>About us</li>
                    </ul> </div>
                <div className="footer-content-right">
                    <h2>Any Message?</h2>
                    <ul>
                        <li>01690205129</li>
                        <li>info@gmail.com</li>
                    </ul>

                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 &copy;Khaidai.com All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer