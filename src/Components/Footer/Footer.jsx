// ===================== All Imports
import            './Footer.css'
import React from 'react'

const Footer = () => {
    return (
        <>
            {/* =================== Footer Part Start =================== */}

            <footer>

                {/* footer row */}
                <div className="footerRow">

                    {/* footer main image */}
                    <img src="images/footer_image.png" alt="footer_image" className='footerImage' />

                    {/* footer wriiten part */}
                    <div className="footerPart">

                        {/* footer logo image */}
                        <img src="images/logo.png" alt="footer_logo" />

                        {/* join club part */}
                        <ul className='joinClubPart'>
                            <h1><span></span>Join <br /> Our <br /> Club </h1>
                            <p>Dolor sit amet ipsum consectetur adipiscing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices ipsum sed dolor.</p>
                        </ul>

                        {/* footer contact part */}
                        <ul className='contactPart'>
                            <h2>Contact <br /> Us</h2>

                            {/* all contacts */}
                            <ul className='allContacts'>
                                <li>586 Avada Avenue, Avadaville 30221 - USA</li>  {/* place */}
                                <li>Email: ext-sports@my- <br />domain.com</li>  {/* email */}
                                <li>Phone: (555) <br /> 802-1234</li>  {/* phone number */}
                            </ul>
                        </ul>

                        {/* copyright area */}
                        <ul className='copyRight'>
                            © 2021 | Avada Theme by ThemeFusion | All Rights Reserved.
                        </ul>
                    </div>
                </div>
            </footer>

            {/* =================== Footer Part End =================== */}
        </>
    )
}

export default Footer