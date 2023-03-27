import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

class SideMenu extends Component {

    render() {
        const { isMenuActive, onOverLayClick } = this.props
        const sideMenuClasses = classnames({
            // 'side-menu--active': isMenuActive,
            'side-menu': isMenuActive
        })
        console.log("this is inside sidemenu: ", isMenuActive)
        const sideMenuContentClasses = classnames({
            // 'side-menu__content--active': isMenuActive,
            'side-menu__content': isMenuActive,
            
        })

        const sideMenuOverlayClasses = classnames({
            "side-menu__overlay": isMenuActive,
            // 'side-menu__overlay--active': isMenuActive
        })


        return (
            <aside className={sideMenuClasses}>
                <div className={sideMenuOverlayClasses} onClick = {onOverLayClick}/>
                <div className={sideMenuContentClasses}>
                    {/* okay so this is where the i put the menu options, 
                    the thing is it shows up all the time and i don't know how to make it conditional */}
                    {Menu()}
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