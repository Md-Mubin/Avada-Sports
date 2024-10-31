// ===================== All Imports
import            './CommonJoinClubCart.css'
import React from 'react'

const CommonJoinClubCart = ({ joinClubImage, clubInfo, clubHead, clubName }) => {
    return (
        <>
            {/* =================== Common Join Club Part Start =================== */}

            <ul className='commonJoinClubCart'>
                <img src={joinClubImage} alt="joinClubImage" className='joinClubImage' />
                <div className="joinClubInfo">

                    {/* common join club name */}
                    <h4>{clubName}</h4>

                    {/* common join club heading */}
                    <h5>{clubHead}</h5>

                    {/* common join club info */}
                    <h6>{clubInfo}</h6>
                </div>
            </ul>

            {/* =================== Common Join Club Part End =================== */}
        </>
    )
}

export default CommonJoinClubCart