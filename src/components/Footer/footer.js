import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

import { CURRENT_YEAR } from '../../config'

const Footer = () => {
    return (
        <div className='footer'>
            <Link to='/' className='logoFooter' >
            <img alt='nba logo' src='images/nba_logo.png'/>
            </Link>
            <div className='right'>
                @NBA {CURRENT_YEAR} All rights reserved.
            </div>
        </div>
    )
}

export default Footer;