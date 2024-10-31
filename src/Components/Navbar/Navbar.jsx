// ===================== All Imports
import                       './Navbar.css'
import React            from 'react'
import { Link }         from 'react-router-dom'
import ResponsiveNavbar from './ResponsiveNavbar/ResponsiveNavbar'

const Navbar = () => {
    return (
        <>
            {/* =================== Navbar Part Start =================== */}

            <nav>

                {/* container start */}
                <div className="container">

                    {/* nav row part */}
                    <div className="navRow">

                        {/* main navbar logo image */}
                        <img src="images/logo.png" alt="logo_image" />

                        {/* navbar items part */}
                        <ul className='navItems'>
                            <li><Link to={"#"}>Home</Link></li>
                            <li><Link to={"#"}>About Us</Link></li>
                            <li><Link to={"#"}>Latest News</Link></li>
                            <li><Link to={"#"}>Contact</Link></li>
                            <li><Link to={"#"}>Activites</Link></li>
                        </ul>

                        {/* navbar button for getting started */}
                        <button className='navButton'>Get Started</button>
                    </div>
                </div>

                {/* ------------ Responsive Navbar ------------ */}
                                <ResponsiveNavbar />
                {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
            </nav>

            {/* =================== Navbar Part End =================== */}
        </>
    )
}

export default Navbar