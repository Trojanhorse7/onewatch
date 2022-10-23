import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import logoImg from "../../assets/ONEWATCH LOGO.png";
import logoImg3 from "../../assets/ONEWATCH LOGO3.png";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiFillCloseSquare} from "react-icons/ai";
import {BsFillMoonFill, BsBrightnessHighFill} from "react-icons/bs";

const Navbar = (props) => {
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
          <Link to="/">{props.theme === "light" ? <img src={logoImg} alt="onewatch-logo" /> : <img src={logoImg3} alt="onewatch-logo" />}</Link>
        </div>
        <div className={`navbar-2 ${!isOpened ? "active" : ""}`}>
          <div className='navbar-2-1'>
            <AiFillCloseSquare onClick={openMenuHandler} className="navbar-close" />
            <ul>
              <li><Link to="/" onClick={e => {openMenuHandler(); scrollhandler()}}>Home</Link></li>
              <li><Link to="/" onClick={ e => {openMenuHandler(); scrollhandler()}}>Calculator</Link></li>
              <li><Link to="/" onClick={ e => {openMenuHandler(); scrollhandler()}}>FAQ</Link></li>
            </ul>
          </div>
          <div className='navbar-2-2'>
            {props.theme === "light" 
              ? <BsBrightnessHighFill onClick={ e => {props.themeSwitch(); openMenuHandler(); scrollhandler()}}/> 
              : <BsFillMoonFill  onClick={ e => {props.themeSwitch(); openMenuHandler(); scrollhandler()}} color="white"/>
            }
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