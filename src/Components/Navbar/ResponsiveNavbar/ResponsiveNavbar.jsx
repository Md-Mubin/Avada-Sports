import React, { useState } from 'react'
import './ResponsiveNavbar.css'
import { Link } from 'react-router-dom'
import { HiBarsArrowDown, HiBarsArrowUp } from 'react-icons/hi2'

const ResponsiveNavbar = () => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <>
            <nav className='resNav'>
                <div className="container">
                    <div className="resNavRow">
                        <img src="images/logo.png" alt="logo_image" className='resNavLogo' />
                        <button onClick={handleShow}><HiBarsArrowDown /></button>

                        {
                            <ul className={`resNavItems ${show ? 'translate-y-0' : 'translate-y-[-400px]'}`}>
                                <li><Link to={"#"}>Home</Link></li>
                                <li><Link to={"#"}>About Us</Link></li>
                                <li><Link to={"#"}>Latest News</Link></li>
                                <li><Link to={"#"}>Contact</Link></li>
                                <li><Link to={"#"}>Activites</Link></li>
                                <div className="resNavButtons">
                                    <button>Get Started</button>
                                    <button onClick={handleShow}><HiBarsArrowUp /></button>
                                </div>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default ResponsiveNavbar