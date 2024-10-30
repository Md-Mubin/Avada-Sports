import React from 'react'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <section className='bannerSection'>
                <img src="images/banner_child.png" alt="child_image" className='bannerImageChild' />
                <div className="container">
                    <div className="bannerHead">
                        <h1>Experience The Spirit Of Adventure Sports</h1>
                        <div className="bannerButtons">
                            <button>Explore Activities</button>
                            <button>Who We Are</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner