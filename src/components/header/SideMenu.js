import React, { Component } from 'react'
import classnames from 'classnames'
import { Link, useNavigate} from "react-router-dom"
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
                <div className={sideMenuContentClasses} onClick = {onOverLayClick}>
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
            <Link to="/">Home</Link>
            </div>
            <div className='menu-option' id = "recipe-book-menu">
            <Link to="/RecipeBook">Recipe Book</Link>
            </div>
            <div className='menu-option' id = 'new-recipe-menu'>
            <Link to="/newrecipe">Create New Recipe</Link>
            </div>
            <div className='menu-option' id = 'profile-menu'>
            <Link to="/profile">Profile</Link>
            </div>
        </div>
    )
}

export default SideMenu