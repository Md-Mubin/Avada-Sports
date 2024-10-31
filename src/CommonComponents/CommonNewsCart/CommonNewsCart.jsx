// ===================== All Imports
import                       './commonNewsCart.css'
import React            from 'react'
import { FaArrowRight } from 'react-icons/fa'

const CommonNewsCart = ({newsImage}) => {
    return (
        <>
            {/* =================== Common News Cart Part Start =================== */}

            <ul className='commonNewsCart'>

                {/* common news cart image */}
                <img src={newsImage} alt="news_images" />
                <div className="cartHead">Paragliding Adventures Across The World</div>
                <div className="cartInfo">Integer amet miut ipsum molestie bibendum vitae sitat ligula fermentum tellus</div>
                <button>Read Article<FaArrowRight/></button>
            </ul>

            {/* =================== Common News Cart Part End =================== */}
        </>
    )
}

export default CommonNewsCart