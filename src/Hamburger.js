import React from 'react'

function Hamburger({ fill = "#594e78", onMenuClick}) {
    return (
        <svg
            onClick = {onMenuClick}
            id = "Menu_Burger_Icon"
            data-name="Menu Burger Icon"
            // viewBox="31.5 30 49.9 32"
            height="10vh"
            width="120"
            fill={fill}
        >
            <rect
                id="Rectangle_9"
                width="49.9"
                height="4"
                className = "hamburger__icon__fill"
                data-name="Rectangle_9"
                rx="2"
                transform='translate(31.5 58)'
            /> 
            <rect
                id="Rectangle_10"
                width="49.9"
                height="4"
                className = "hamburger__icon__fill"
                data-name="Rectangle_10"
                rx="2"
                transform='translate(31.5 44)'
            /> 
            <rect
                id="Rectangle_11"
                width="49.9"
                height="4"
                className = "hamburger__icon__fill"
                data-name="Rectangle_11"
                rx="2"
                transform='translate(31.5 30)'
            /> 
        </svg>
    )
}

export default Hamburger