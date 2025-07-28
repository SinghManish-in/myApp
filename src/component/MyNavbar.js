import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

export default function MyNavbar(props) {
  const [mode,setMode] = useState('light');
  const [modeText,setModeText] = useState('Enable Dark Mode');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      setModeText('Enable Light Mode');
      document.body.style.backgroundColor = '#042743';
    }else{
      setMode('light');
      setModeText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
    }
  }
  

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
    <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">{props.title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/home">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">{props.contact}</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
        <label className="form-check-label" htmlFor="switchCheckDefault">{modeText}</label>
    </div>
    </div>
  </div>
</nav>
</> 
  );
};


