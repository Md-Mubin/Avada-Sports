import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footerRow">
                    <img src="images/footer_image.png" alt="footer_image" className='footerImage' />
                    <div className="footerPart">
                        <img src="images/logo.png" alt="footer_logo" />

                        <ul className='joinClubPart'>
                            <h1><span></span>Join <br /> Our <br /> Club </h1>
                            <p>Dolor sit amet ipsum consectetur adipiscing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices ipsum sed dolor.</p>
                        </ul>

                        <ul className='contactPart'>
                            <h2>Contact <br /> Us</h2>
                            <ul className='allContacts'>
                                <li>586 Avada Avenue, Avadaville 30221 - USA</li>
                                <li>Email: ext-sports@my- <br />domain.com</li>
                                <li>Phone: (555) <br /> 802-1234</li>
                            </ul>
                        </ul>

                        <ul className='copyRight'>
                            © 2021 | Avada Theme by ThemeFusion | All Rights Reserved.
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer