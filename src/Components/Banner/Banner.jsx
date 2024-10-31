// ===================== All Imports
import            './Banner.css'
import React from 'react'

const Banner = () => {
    return (
        <>
            {/* =================== Banner Section Part Start =================== */}

            <section className='bannerSection'>

                {/* banner image's child for styling */}
                <img src="images/banner_child.png" alt="child_image" className='bannerImageChild' />

                {/* container start */}
                <div className="container">

                    {/* banner heading part */}
                    <div className="bannerHead">
                        <h1>Experience The Spirit Of Adventure Sports</h1>

                        {/* buttons in banner area */}
                        <div className="bannerButtons">
                            <button>Explore Activities</button>
                            <button>Who We Are</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* =================== Banner Section Part End =================== */}
        </>
    )
}

export default Banner