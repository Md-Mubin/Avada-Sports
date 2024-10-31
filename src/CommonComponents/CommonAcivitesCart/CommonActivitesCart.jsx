// ===================== All Imports
import            './CommonActivitesCart.css'
import React from 'react'

const CommonActivitesCart = ({activitesImage, activitesInfo, activitesName}) => {
    return (
        <>

            <ul className='carts'>

                {/* common activities image */}
                <li>
                    <img src={activitesImage} alt="activites_image" />
                </li>

                {/* common activities names */}
                <li className='mubin-activitiesName'>
                    {activitesName}
                </li>

                {/* common activities infos */}
                <li className='activitesInfo'>
                    {activitesInfo}
                </li>
            </ul>

            {/* =================== Common Activities Cart Part End =================== */}
        </>
    )
}

export default CommonActivitesCart