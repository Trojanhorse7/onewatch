import React from 'react';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import useLocalStorage from 'use-local-storage';
import Home from "./components/Indexpage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const themeSwitch = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
      <main className="app" data-theme={theme}>
        <ScrollToTop height='20' smooth="true" color="var(--primary-500)" style={{marginBottom: "-1rem"}} top="500"/>
        <div className="container">
          <ToastContainer/>
          <Routes>
            <Route path="/" element={<Home theme={theme} themeSwitch={themeSwitch}/>} />
          </Routes>
        </div>
      </main>
  );
}

export default App;
