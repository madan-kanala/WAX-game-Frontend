
import React from 'react';
import Hero from './components/Home/Hero/Hero';
import "./App.css";
import logo from "./waxp.gif";

const App = () => {
  return (
    <div>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hustle WAX NFT Game Project</p>
        <a
          className="App-link"
          href="https://on.wax.io/wax-io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          We will success!
        </a>
      </header>
            <Hero />
    </div>
  );
};

export default App;
