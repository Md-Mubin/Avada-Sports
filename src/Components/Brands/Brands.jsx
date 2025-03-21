// ===================== All Imports
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import './Brands.css'
import React from 'react'

const Brands = () => {

    return (
        <>
            {/* =================== Brands Section Part Start =================== */}
            <ParallaxProvider>

                <section className='brandsSection'>

                    {/* container start */}
                    <div className="container">

                        {/* brands images part start */}
                        <Parallax speed={-10}>
                            <ul className='brandsRow'>
                                <li><img src="images/brands1.png" alt="brand_image" /></li>
                                <li><img src="images/brands2.png" alt="brand_image" /></li>
                                <li><img src="images/brands3.png" alt="brand_image" /></li>
                                <li><img src="images/brands4.png" alt="brand_image" /></li>
                                <li><img src="images/brands5.png" alt="brand_image" /></li>
                                <li><img src="images/brands6.png" alt="brand_image" /></li>
                            </ul>
                        </Parallax>
                    </div>
                </section>

            </ParallaxProvider>
            {/* =================== Brands Section Part End =================== */}
        </>
    )
}

export default Brands