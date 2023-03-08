import './App.css';
import React from 'react';
import Header from './container/header/Header';
import About from './container/about/About';
import Price from './container/price/Price';
import Footer from './container/footer/Footer';
function App() {
  return (
    <div className="App">
      <div id='header'>
        <Header/>
      </div>
      <div id='about'>
        <About/>
      </div>
      <div id='price'>
       <Price/>
      </div>
      <div id='footer'>
       <Footer/>
      </div>
    </div>
  );
}

export default App;
