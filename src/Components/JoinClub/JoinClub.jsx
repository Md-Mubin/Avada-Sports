import React from 'react'
import './JoinClub.css'
import CommonJoinClubCart from '../../CommonComponents/CommonJoinClubCart/CommonJoinClubCart'

const JoinClub = () => {
    return (
        <>
            <section className='joinClubSection'>
                <div className="container">
                    <div className="joinClubRow">
                        <img src="images/joinLogo.png" alt="join_image" className='joinClubLogo'/>
                        <h1>Extreme Sports Will Test Your Limits And Push The To The Max</h1>
                        <p>Be Prepared To Experience The New Adventures</p>
                    </div>
                    <div className="joinButtons">
                        <button>Join Our Club</button>
                        <button>View The Demo</button>
                    </div>
                    <div className="clubsCart">
                        <CommonJoinClubCart joinClubImage={'images/test1.png'} clubName={'Sports Videos'} clubHead={'Get Inspired'} clubInfo={'Dolor sit amet magna'}/>
                        <CommonJoinClubCart joinClubImage={'images/test2.png'} clubName={'Sports Videos'} clubHead={'Get Inspired'} clubInfo={'Dolor sit amet magna'}/>
                        <CommonJoinClubCart joinClubImage={'images/test3.png'} clubName={'Sports Videos'} clubHead={'Get Inspired'} clubInfo={'Dolor sit amet magna'}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JoinClub