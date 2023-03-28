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
        <SideMenu 
          isMenuActive={isMenuActive}
          onOverLayClick = {() => activeMenu(!isMenuActive)}/>

      </header>
    </div>

    
  );
}

export default App;
