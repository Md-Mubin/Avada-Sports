import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import ResponsiveNavbar from './ResponsiveNavbar/ResponsiveNavbar'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="navRow">
                        <img src="images/logo.png" alt="logo_image" />
                        <ul className='navItems'>
                            <li><Link to={"#"}>Home</Link></li>
                            <li><Link to={"#"}>About Us</Link></li>
                            <li><Link to={"#"}>Latest News</Link></li>
                            <li><Link to={"#"}>Contact</Link></li>
                            <li><Link to={"#"}>Activites</Link></li>
                        </ul>
                        <button className='navButton'>Get Started</button>
                    </div>

                </div>
                    <ResponsiveNavbar/>
            </nav>
        </>
    )
}

export default Navbar