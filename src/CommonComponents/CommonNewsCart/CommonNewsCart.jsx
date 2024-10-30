import React from 'react'
import './commonNewsCart.css'
import { FaArrowRight } from 'react-icons/fa'

const CommonNewsCart = ({newsImage}) => {
    return (
        <>
            <ul className='commonNewsCart'>
                <img src={newsImage} alt="news_images" />
                <div className="cartHead">Paragliding Adventures Across The World</div>
                <div className="cartInfo">Integer amet miut ipsum molestie bibendum vitae sitat ligula fermentum tellus</div>
                <button>Read Article<FaArrowRight/></button>
            </ul>
        </>
    )
}

export default CommonNewsCart