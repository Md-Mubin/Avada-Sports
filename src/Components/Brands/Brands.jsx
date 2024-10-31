// ===================== All Imports
import            './Brands.css'
import React from 'react'

const Brands = () => {

    return (
        <>
            {/* =================== Brands Section Part Start =================== */}

            <section className='brandsSection'>

                {/* container start */}
                <div className="container">

                    {/* brands images part start */}
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

            {/* =================== Brands Section Part End =================== */}
        </>
    )
}

export default Brands