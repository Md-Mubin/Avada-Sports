import React from 'react'
import './News.css'
import CommonNewsCart from '../../CommonComponents/CommonNewsCart/CommonNewsCart'

const News = () => {
    return (
        <>
            <section className='newsSection'>
                <div className="container">
                    <div className="newsHead">
                        <div className="mainHead">
                            <h6>Share The Passion</h6>
                            <h1>Extreme Sports News</h1>
                        </div>
                        <p>Dolor sit amet consectetur adipiscing elit sed con eiusmod tempor incididunt labore etys dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus ipsum dolore commodo viverra maecenas.</p>
                    </div>

                    <div className="newsCartRow">
                        <CommonNewsCart newsImage={'images/news1.png'}/>
                        <CommonNewsCart newsImage={'images/news2.png'}/>
                        <CommonNewsCart newsImage={'images/news3.png'}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default News