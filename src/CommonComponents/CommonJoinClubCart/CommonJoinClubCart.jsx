import React from 'react'
import './CommonJoinClubCart.css'

const CommonJoinClubCart = ({ joinClubImage, clubInfo, clubHead, clubName }) => {
    return (
        <>
            <ul className='commonJoinClubCart'>
                <img src={joinClubImage} alt="joinClubImage" className='joinClubImage' />
                <div className="joinClubInfo">
                    <h4>{clubName}</h4>
                    <h5>{clubHead}</h5>
                    <h6>{clubInfo}</h6>
                </div>
            </ul>
        </>
    )
}

export default CommonJoinClubCart