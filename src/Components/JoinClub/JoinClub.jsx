// ===================== All Imports
import                         './JoinClub.css'
import React              from 'react'
import CommonJoinClubCart from '../../CommonComponents/CommonJoinClubCart/CommonJoinClubCart'

const JoinClub = () => {
    return (
        <>
            {/* =================== Join Club Section Part Start =================== */}

            <section className='joinClubSection'>

                {/* container start */}
                <div className="container">

                    {/* join club row */}
                    <div className="joinClubRow">

                        {/* join section logo */}
                        <img src="images/joinLogo.png" alt="join_image" className='mubin-joinClubLogo'/>

                        {/* join section heading */}
                        <h1>Extreme Sports Will Test Your Limits And Push The To The Max</h1>
                        <p>Be Prepared To Experience The New Adventures</p>
                    </div>

                    {/* join section buttons */}
                    <div className="joinButtons">
                        <button>Join Our Club</button>
                        <button>View The Demo</button>
                    </div>

                    {/* all clubs carts */}
                    <div className="clubsCart">
                        <CommonJoinClubCart joinClubImage={'images/test1.png'} clubName={'Sports Videos'} clubHead={'Get Inspired'} clubInfo={'Dolor sit amet magna'}/>
                        <CommonJoinClubCart joinClubImage={'images/test2.png'} clubName={'Sports Videos'} clubHead={'Get Inspired'} clubInfo={'Dolor sit amet magna'}/>
                        <CommonJoinClubCart joinClubImage={'images/test3.png'} clubName={'Sports Videos'} clubHead={'Get Inspired'} clubInfo={'Dolor sit amet magna'}/>
                    </div>
                </div>
            </section>

            {/* =================== Join Club Section Part End =================== */}
        </>
    )
}

export default JoinClub