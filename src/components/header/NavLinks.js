import { Avatar } from '@material-ui/core'
import React from 'react'
import './nav.css'

const NavLinks = ({ avatar, Icon, title, onClick }) => {
    return (
        <div onClick={onClick} className="navLinks">
            {Icon && <Icon className="navLinks__icon" />}
            {avatar && <Avatar className="navLinks__icon" src={avatar} /> }
            <h3 className="navLinks__title">
                {title}
            </h3>
        </div>
    )
}
 
export default NavLinks
