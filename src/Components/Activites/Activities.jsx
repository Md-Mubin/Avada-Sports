import React from 'react'
import './Activities.css'
import CommonActivitesCart from '../../CommonComponents/CommonAcivitesCart/CommonActivitesCart'

const Activities = () => {
    return (
        <>
            <section className='activitesSection'>
                    <img src="images/sportimg.png" alt="sportimg_image" className='sporting'/>
                <div className="container">
                    <div className="activitiesHead">
                        <div className="head">
                            <h3>Feel The Excitement</h3>
                            <h1>Extreme Sports Activities</h1>
                        </div>
                        <p>Dolor sit amet consectetur adipiscing elit sed con eiusmod tempor incididunt labore etys dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus ipsum dolore commodo viverra maecenas.</p>
                    </div>

                    <div className="activitiesCart">
                        <CommonActivitesCart activitesImage={'images/sports1.png'} activitesName={'Mountain Biking'} activitesInfo={'Dolor sit amet magna'} />
                        <CommonActivitesCart activitesImage={'images/sports2.png'} activitesName={'Snow Sports'} activitesInfo={'Dolor sit amet magna'} />
                        <CommonActivitesCart activitesImage={'images/sports3.png'} activitesName={'Surfing'} activitesInfo={'Dolor sit amet magna'} />
                        <CommonActivitesCart activitesImage={'images/sports4.png'} activitesName={'Skateboarding'} activitesInfo={'Dolor sit amet magna'} />
                        <CommonActivitesCart activitesImage={'images/sports5.png'} activitesName={'Jet Skiing'} activitesInfo={'Dolor sit amet magna'} />
                        <CommonActivitesCart activitesImage={'images/sports6.png'} activitesName={'Ice Climbing'} activitesInfo={'Dolor sit amet magna'} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Activities