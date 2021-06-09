import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import SideNav from './SideNav/sidenav'
import './header.css'

const Header = (props) => {

    const navBars = () => (
        <div className="bars">
            <FontAwesome name="bars"
                onClick={props.onOpenNav}
            />
        </div>
    )

    const logo = () => {
        return (
            <Link to='/' className="logo">
                <img alt='nba logo' src='images/nba_logo.png'/>
            </Link>
        )
    }
    return (
        <header className="header">
            <SideNav {...props} />
            <div className="headerOpt">
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;