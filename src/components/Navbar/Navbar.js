import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import logoImg from "../../assets/ONEWATCH LOGO.png";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoMdClose} from "react-icons/io";
import {BsFillMoonFill} from "react-icons/bs"

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(true);
  const [isScroll, setIsScroll] = useState(false);
  
  const openMenuHandler = () => {
    setIsOpened(!isOpened);
  }

  useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 90) {
        setIsOpened(true);
				setIsScroll(true);
			} else {
        setIsScroll(false);
        setIsOpened(true);
			}
		});
	}, []);

   //handle scroll to top 
    const scrollhandler = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

  return (
    <div className={`navbar ${isScroll ? "sticky" : ""}`}>
      <div className="wrapper">
        <div className='navbar-1'>
          <Link to="/"><img src={logoImg} alt="mergingtrader-logo" /></Link>
        </div>
        <div className={`navbar-2 ${!isOpened ? "active" : ""}`}>
          <div className='navbar-2-1'>
            <IoMdClose onClick={openMenuHandler} className="navbar-close" />
            <ul>
              <li><Link to="/" onClick={e => {openMenuHandler(); scrollhandler()}}>Home</Link></li>
              <li><Link to="/dashboard/investment" onClick={ e => {openMenuHandler(); scrollhandler()}}>Calculator</Link></li>
              <li><a href="#faqs" onClick={openMenuHandler}>FAQ</a></li>
            </ul>
          </div>
          <div className='navbar-2-2'>
            <BsFillMoonFill />
          </div>
        </div>
        
        <div className='navbar-3'>
            <GiHamburgerMenu  onClick={openMenuHandler} className='navbar-open'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar