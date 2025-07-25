import React, { useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import './App.css'
//import AboutUs from './component/AboutUs';

const App = () => {

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
  const myStyle = {
    width: '100%'
  };
  
  return (
    <>
    <div className='container'> 
      <Navbar title='Textutils' mode={mode} toggleMode={toggleMode} about='About' home='Home' modeText={modeText}/>
      <div className='container'>
        <TextForm heading="Enter text to analyze" mode={mode}/>
      </div>
    </div>
    </>
  );
};

export default App;