import React from 'react';
import TextForm from './component/TextForm';
import MyNavbar from './component/MyNavbar';

import './App.css'


const App = () => {
  
  return (
    <>
    <div className='container'> 
      <MyNavbar title='Textutils' about='About' home='Home' contact='Contact'/>
      <div className='container'>
        <TextForm heading="Enter text to analyze"/>
      </div>
    </div>
    </>
  );
};

export default App;