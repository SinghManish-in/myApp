import React, { useState } from 'react';
import MyNavbar from './MyNavbar';


export default function Home() {

    return (
        <>
        <div className='container'> 
          <MyNavbar title='Textutils' about='About' home='Home' contact='Contact'/>
        </div>
        <h1>This is Home</h1>
        </>
      );
};
