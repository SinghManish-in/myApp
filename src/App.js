import React from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

const App = () => {
  return (
    <>
    <Navbar title='Textutils' about='About' home='Home'/>
    <div className='container'>
      <TextForm heading="Enter text to analyze"/>
    </div>
    </>
  );
};

export default App;