// ===================== All Imports
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import './Banner.css'
import React from 'react'

const Banner = () => {
    return (
        <>
            {/* =================== Banner Section Part Start =================== */}
            <ParallaxProvider>
                <section className='mubin-bannerSection'>

                    {/* banner image's child for styling */}
                    <img src="images/banner_child.png" alt="child_image" className='bannerImageChild' />

                    <Parallax speed={-15}>
                        {/* container start */}
                        <div className="container">

                            {/* banner heading part */}
                            <div className="mubin-bannerHead">
                                <h1>Experience The Spirit Of Adventure Sports</h1>

                                {/* buttons in banner area */}
                                <div className="bannerButtons">
                                    <button>Explore Activities</button>
                                    <button>Who We Are</button>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </section>

                {/* =================== Banner Section Part End =================== */}
            </ParallaxProvider>
        </>
    )
}

export default Banner