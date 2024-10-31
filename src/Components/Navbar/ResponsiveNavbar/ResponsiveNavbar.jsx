// ===================== All Imports
import                                         './ResponsiveNavbar.css'
import { Link }                           from 'react-router-dom'
import React, { useState }                from 'react'
import { HiBarsArrowDown, HiBarsArrowUp } from 'react-icons/hi2'

const ResponsiveNavbar = () => {

    // ===================== All Functions
    // useState hook for responsive navbar toggle 
    const [show, setShow] = useState(false)

    // function of trinary operator for toggle work
    const handleShow = () => {
        setShow(!show)
    }

    return (
        <>
            {/* =================== Responsive Navbar Part Start =================== */}

            <nav className='resNav'>

                {/* container start */}
                <div className="container">

                    {/* responsive nav row part */}
                    <div className="resNavRow">

                        {/* responsive navbar logo image */}
                        <img src="images/logo.png" alt="logo_image" className='mubin-resNavLogo' />

                        {/* responsive navbar button for working the toggle function */}
                        <button onClick={handleShow}><HiBarsArrowDown /></button>

                        {/* toggle work start for responsive navbar */}
                        {
                            <ul className={`resNavItems ${show ? 'translate-y-0' : 'translate-y-[-400px]'}`}>
                                <li><Link to={"#"}>Home</Link></li>
                                <li><Link to={"#"}>About Us</Link></li>
                                <li><Link to={"#"}>Latest News</Link></li>
                                <li><Link to={"#"}>Contact</Link></li>
                                <li><Link to={"#"}>Activites</Link></li>

                                {/* buttons inside of responsive navbar */}
                                <div className="resNavButtons">

                                    {/* button for get started */}
                                    <button>Get Started</button>

                                    {/* button inside of the responsive navabar to close the navbar */}
                                    <button onClick={handleShow}><HiBarsArrowUp /></button>
                                </div>
                            </ul>
                        }
                    </div>
                </div>
            </nav>

            {/* =================== Responsive Navbar Part End =================== */}
        </>
    )
}

export default ResponsiveNavbar