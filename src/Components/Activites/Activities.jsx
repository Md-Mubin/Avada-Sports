// ===================== All Imports
import                          './Activities.css'
import React               from 'react'
import CommonActivitesCart from '../../CommonComponents/CommonAcivitesCart/CommonActivitesCart'

const Activities = () => {
    return (
        <>
            {/* =================== Activites Section Part Start =================== */}

            <section className='activitesSection'>

                {/* activites banner image */}
                <img src="images/sportimg.png" alt="sportimg_image" className='sporting' />

                {/* container start */}
                <div className="container">

                    {/* activities heading */}
                    <div className="mubin-activitiesHead">
                        <div className="head">
                            <h3>Feel The Excitement</h3>
                            <h1>Extreme Sports Activities</h1>
                        </div>
                        <p>Dolor sit amet consectetur adipiscing elit sed con eiusmod tempor incididunt labore etys dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus ipsum dolore commodo viverra maecenas.</p>
                    </div>

                    {/* activites carts */}
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

            {/* =================== Activites Section Part End =================== */}
        </>
    )
}

export default Activities