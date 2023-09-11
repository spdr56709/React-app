// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import TextFrom from './components/TextFrom';
// import About from './components/About';
import React, { useState } from 'react'



function App() {

  const [mode, setmode] = useState('light')

  const togglemode = () => {

    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "rgb(78 38 60)";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }

  }

  return (
    <>


      <Navbar mode={mode} togglemode={togglemode} />

      {/* <div className="con-3"> */}

      <TextFrom heading="Enter the element" mode={mode}/>

      {/* <About/> */}







    </>

  );
}

export default App;
