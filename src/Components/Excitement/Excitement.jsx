// ===================== All Imports
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import './Excitement.css'
import React from 'react'

const Excitement = () => {
    return (
        <>
            {/* =================== Excitement Section Part Start =================== */}
            <ParallaxProvider>
                <section className='excitementSection'>

                    {/* container start */}
                    <div className="container">

                        {/* exitement heading */}
                        <div className="excitementHead">
                            <h6>Share The Excitement</h6>
                            <h1>Why Choose Us</h1>
                        </div>

                        {/* exitement row */}
                        <div className="exitementRow">

                            {/* cart */}
                            <ul className='excitementCart'>
                                <li className='exitementImage'><img src="images/blank_image.png" alt="blank_images" /></li>
                                <h4 className='exitemnetCartName'>A Team Of Passionate Individuals</h4>
                                <p className='exitementCartInfo'>Dolor sit amet mag eliqua esimod ipsum dolore suspendise quis ultrices gravida risus.</p>
                            </ul>

                            {/* cart */}
                            <ul className='excitementCart'>
                                <li className='exitementImage'><img src="images/blank_image.png" alt="blank_images" /></li>
                                <h4 className='exitemnetCartName'>A Team Of Passionate Individuals</h4>
                                <p className='exitementCartInfo'>Dolor sit amet mag eliqua esimod ipsum dolore suspendise quis ultrices gravida risus.</p>
                            </ul>

                            {/* cart */}
                            <ul className='excitementCart'>
                                <li className='exitementImage'><img src="images/blank_image.png" alt="blank_images" /></li>
                                <h4 className='exitemnetCartName'>A Team Of Passionate Individuals</h4>
                                <p className='exitementCartInfo'>Dolor sit amet mag eliqua esimod ipsum dolore suspendise quis ultrices gravida risus.</p>
                            </ul>

                            {/* cart */}
                            <ul className='excitementCart'>
                                <li className='exitementImage'><img src="images/blank_image.png" alt="blank_images" /></li>
                                <h4 className='exitemnetCartName'>A Team Of Passionate Individuals</h4>
                                <p className='exitementCartInfo'>Dolor sit amet mag eliqua esimod ipsum dolore suspendise quis ultrices gravida risus.</p>
                            </ul>
                        </div>
                    </div>
                </section>

            </ParallaxProvider>
            {/* =================== Excitement Section Part End =================== */}
        </>
    )
}

export default Excitement