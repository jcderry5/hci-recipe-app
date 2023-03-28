import React, { Component } from 'react'
import classnames from 'classnames'
// import PropTypes from 'prop-types'

class SideMenu extends Component {

    render() {
        const { isMenuActive, onOverLayClick } = this.props
        const sideMenuClasses = classnames({
            'side-menu': isMenuActive
        })
        const sideMenuContentClasses = classnames({
            'side-menu__content': isMenuActive,
            
        })
        const sideMenuOverlayClasses = classnames({
            "side-menu__overlay": isMenuActive,
        })

        let menu = "";

        if(isMenuActive === true){
            menu = Menu()
        }

        return (
            <aside className={sideMenuClasses}>
                <div className={sideMenuOverlayClasses} onClick = {onOverLayClick}/>
                <div className={sideMenuContentClasses}>
                    {menu}
                </div>
            </aside>
        )
    }
}

function Menu(){
    return(
        <div>
            <div className='menu-option' id = "home-menu">
                Home
            </div>
            <div className='menu-option' id = "recipe-book-menu">
                Recipe Book
            </div>
            <div className='menu-option' id = 'new-recipe-menu'>
                New Recipe
            </div>
            <div className='menu-option' id = 'profile-menu'>
                Profile
            </div>
        </div>
    )
}

export default SideMenu