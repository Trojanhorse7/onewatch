/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Token from "./Token/Token";
import Faqs from "./Faqs/Faqs";
import Footer from "./Footer/Footer";
import Index from './addressInfo';

const Indexpage = (props) => {
    const [newinfo, setNewInfo] = useState([]);

    const info = (details) => {
        console.log(details);
        setNewInfo(details);
    }


    return (
        <div>
            <Navbar themeSwitch={props.themeSwitch} theme={props.theme}/>
            <Hero info={info}/>
            <Token />
            <Index newinfo={newinfo}/>
            <a id='faq'> </a>
            <Faqs />
            <Footer theme={props.theme}/>
        </div>
    )
}

export default Indexpage;