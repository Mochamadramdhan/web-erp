import './App.css';
import { Typography} from '@mui/material';
import React from 'react';
import Header from './container/header/Header';
import About from './container/about/About';

function App() {
  return (
    <div className="App">
      <div id='header'>
        <Header/>
      </div>
      <div id='about'>
        <About/>
      </div>
      <div className="aaa">
        <Typography>CONTACT</Typography>
      </div>
    </div>
  );
}

export default App;
