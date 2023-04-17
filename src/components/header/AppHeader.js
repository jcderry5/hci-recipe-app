import '../../App.css';
import React, { useState } from 'react';

import Hamburger from './Hamburger';
import SideMenu from './SideMenu';

function AppHeader() {
    const [isMenuActive, activeMenu] = useState(false);

    return(
        <header className="App-header">
            {/* Hamburger Menu */}
            <div className='icon'>
                <Hamburger 
                    fill="#fff" 
                    onMenuClick={() => activeMenu(!isMenuActive)} 
                />
            </div>

            <div id="header-title">
                Recipe Remix
            </div>

            {/* Menu */}
            <SideMenu 
                isMenuActive={isMenuActive}
                onOverLayClick = {() => activeMenu(!isMenuActive)}/>
      </header>
    )
}

export default AppHeader;