// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

import Hamburger from './Hamburger';
import SideMenu from './SideMenu';

function App() {
  const [isMenuActive, activeMenu] = useState(false)

  return (
    <div className="App">
      <header className="App-header">

        {/* Hamburger Menu */}
        <div className='icon'>
          <Hamburger 
            fill="#fff" 
            onMenuClick={() => activeMenu(!isMenuActive)} 
          />
        </div>

        {/* Menu */}
        <SideMenu isMenuActive={isMenuActive}/>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
    </div>
  );
}

export default App;
