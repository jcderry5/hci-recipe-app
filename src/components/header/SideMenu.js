import React, { Component } from 'react'
import classnames from 'classnames'
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
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
        <div className="d-grid gap-2">
            <Button variant='outline-dark' as={Link} to="/hci-recipe-app" bsPrefix="btn menu-option">
                Home
            </Button>
            <Button variant='outline-dark' as={Link} to="/hci-recipe-app/RecipeBook" bsPrefix="btn menu-option">
                Recipe Book
            </Button>
            <Button variant='outline-dark' as={Link} to="/hci-recipe-app/newrecipe" bsPrefix="btn menu-option">
                Create New Recipe
            </Button>
            <Button variant='outline-dark' as={Link} to="/hci-recipe-app/profile" bsPrefix="btn menu-option">
                Profile
            </Button>
        </div>
    )
}

export default SideMenu