// ===================== All Imports
import                     './News.css'
import React          from 'react'
import CommonNewsCart from '../../CommonComponents/CommonNewsCart/CommonNewsCart'

const News = () => {
    return (
        <>
            {/* =================== News Section Part Start =================== */}

            <section className='newsSection'>

                {/* container start */}
                <div className="container">

                    {/* news section heading */}
                    <div className="newsHead">
                        <div className="mainHead">
                            <h6>Share The Passion</h6>
                            <h1>Extreme Sports News</h1>
                        </div>
                        <p>Dolor sit amet consectetur adipiscing elit sed con eiusmod tempor incididunt labore etys dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus ipsum dolore commodo viverra maecenas.</p>
                    </div>

                    {/* all the news section carts */}
                    <div className="newsCartRow">
                        <CommonNewsCart newsImage={'images/news1.png'}/>
                        <CommonNewsCart newsImage={'images/news2.png'}/>
                        <CommonNewsCart newsImage={'images/news3.png'}/>
                    </div>
                </div>
            </section>

            {/* =================== News Section Part End =================== */}
        </>
    )
}

export default News