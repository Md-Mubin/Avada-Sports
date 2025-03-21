// ===================== All Imports
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import './Discover.css'
import React from 'react'
import CountUp from 'react-countup'
import { FaCircle } from 'react-icons/fa'

const Discover = () => {
  return (
    <>
      <ParallaxProvider>
        {/* =================== Discover Section Part Start =================== */}

        <section className='discoverSection'>

          {/* container start */}
          <div className="container">

            {/* discover row part */}
            <div className="mubin-discoverRow">

              {/* discover information */}
              <div className="discoverInfo">
                <h5>Feel The Excitement</h5>
                <h1>Join Us And Embark On New Adventures</h1>
                <p>Dolor sit amet consectetur adipiscing elits eiusmod tempor incididunts laboreyse dolore mag aliqua. Quis ipsum supendise ultrices gravid. Risus commodo viverra sed ipsum maecenas.</p>

                {/* all the bullet points */}
                <ul className='mubin-bulletPoints'>
                  <li><FaCircle className='bulletIcon' />Unde omnis iste natus error sit voluptatem dolore</li>
                  <li><FaCircle className='bulletIcon' />Eaque ipsa quae ab illo inventore veritatis quasi que</li>
                  <li><FaCircle className='bulletIcon' />Accusantium dolore que laudantium totamrem periam</li>
                </ul>

                {/* discover more button */}
                <button className='discoverButton'>Discover More</button>
              </div>

              {/* discover images */}
              <Parallax speed={-10}> 
                <div className="discoverImage">
                  <img src="images/advanture_image1.png" alt="discover_images" />
                  <img src="images/advanture_image2.png" alt="discover_images" />
                </div>
              </Parallax>
            </div>

            {/* all the counters part start */}
            <ul className="counterPart">

              {/* counter-1 for sports activites  */}
              <ul className='counter1 mainCounter'>
                <li className='counter'><CountUp start={0} end={10} duration={4} suffix='+' /></li>
                <li className='counterName'>Sports Activities</li>
              </ul>

              {/* counter-2 for register enthusiasts  */}
              <ul className='counter2 mainCounter'>
                <li className='counter'><CountUp start={0} end={3} duration={6} suffix='k+' /></li>
                <li className='counterName'>Registered Enthusiasts</li>
              </ul>

              {/* counter-3 for experience */}
              <ul className='counter3 mainCounter'>
                <li className='counter'><CountUp start={0} end={15} duration={4} suffix='+' /></li>
                <li className='counterName'>Years of Experience</li>
              </ul>

              {/* counter-4 for average ratings */}
              <ul className='counter4 mainCounter'>
                <li className='counter'><CountUp start={0} end={9.5} duration={2} decimals={1} decimal='.' /></li>
                <li className='counterName'>Average Rating</li>
              </ul>
            </ul>
          </div>
        </section>

        {/* =================== Discover Section Part End =================== */}
      </ParallaxProvider>
    </>
  )
}

export default Discover