/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Token from "./components/Token/Token"
import Faqs from "./components/Faqs/Faqs"
import Footer from "./components/Footer/Footer"
import useLocalStorage from 'use-local-storage'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const themeSwitch = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <main className="app" data-theme={theme}>
      <div className="container">
        <Navbar themeSwitch={themeSwitch} theme={theme}/>
        <Hero />
        <Token />
        <Faqs />
        <Footer theme={theme}/>
      </div>
    </main>
  );
}

export default App;
