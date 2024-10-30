import React from 'react'
import './CommonActivitesCart.css'

const CommonActivitesCart = ({activitesImage, activitesInfo, activitesName}) => {
    return (
        <>
            <ul className='carts'>
                <li><img src={activitesImage} alt="activites_image" /></li>
                <li className='activitiesName'>{activitesName}</li>
                <li className='activitesInfo'>{activitesInfo}</li>
            </ul>
        </>
    )
}

export default CommonActivitesCart