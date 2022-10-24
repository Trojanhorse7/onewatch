import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";
import logoImg from "../../assets/ONEWATCH LOGO2.png";

const Footer = (props) => {

    //handle scroll to top 
    const scrollhandler = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <div className='footer' id='footer'>
            <div className="container-1">
                <div className="footer-1">
                    <div className='footer-1-1'>
                        <div className='footer-img'>
                            <Link to="/"> <img src={logoImg} alt="onewatch-logo" className='var'/></Link> 
                            <p className='footer-p'>Harmony One at a Glance</p>
                        </div>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="footer-1-1">
                        <ul>
                            <li><Link to="/" onClick={scrollhandler}>Home</Link></li>
                            <li><a href="#faq" onClick={scrollhandler}>FAQ</a></li>
                        </ul>
                        <div className='footer-1-1-1'>
                            <p>Data gotten using Covalent API</p>
                            <p>Copyright © 2022.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer