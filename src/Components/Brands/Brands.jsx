import React from 'react'
import './Brands.css'

const Brands = () => {

    return (
        <>
            <section className='brandsSection'>
                <div className="container">
                    <ul className='brandsRow'>
                        <li><img src="images/brands1.png" alt="brand_image" /></li>
                        <li><img src="images/brands2.png" alt="brand_image" /></li>
                        <li><img src="images/brands3.png" alt="brand_image" /></li>
                        <li><img src="images/brands4.png" alt="brand_image" /></li>
                        <li><img src="images/brands5.png" alt="brand_image" /></li>
                        <li><img src="images/brands6.png" alt="brand_image" /></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Brands