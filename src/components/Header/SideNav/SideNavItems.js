import React from 'react'
import { Link } from 'react-router-dom'
import './SideNavItems.css'
import FontAwesome from 'react-fontawesome'

export default function SideNavItems() {

    const items = [
        {   
            type: 'option',
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: 'option',
            icon: 'newspaper',
            text: 'News',
            link: '/news'
        },
        {
            type: 'option',
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: 'option',
            icon: 'sign-in-alt',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: 'option',
            icon: 'sign-out-alt',
            text: 'Sign out',
            link: '/sign-out'
        }
    ]

    function showItems() {
        return items.map((item, i) => {
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </Link>
                </div>
            )
        })
    }

    return (
        <div>
            {showItems()}
        </div>
    )
}
