import React from 'react'
import './Discover.css'
import { FaCircle } from 'react-icons/fa'
import CountUp from 'react-countup'

const Discover = () => {
  return (
    <>
      <section className='discoverSection'>
        <div className="container">

          <div className="discoverRow">

            <div className="discoverInfo">
              <h5>Feel The Excitement</h5>
              <h1>Join Us And Embark On New Adventures</h1>
              <p>Dolor sit amet consectetur adipiscing elits eiusmod tempor incididunts laboreyse dolore mag aliqua. Quis ipsum supendise ultrices gravid. Risus commodo viverra sed ipsum maecenas.</p>
              
              <ul className='bulletPoints'>
                <li><FaCircle className='bulletIcon'/>Unde omnis iste natus error sit voluptatem dolore</li>
                <li><FaCircle className='bulletIcon'/>Eaque ipsa quae ab illo inventore veritatis quasi que</li>
                <li><FaCircle className='bulletIcon'/>Accusantium dolore que laudantium totamrem periam</li>
              </ul>
              
              <button className='discoverButton'>Discover More</button>
            </div>

            <div className="discoverImage">
              <img src="images/advanture_image1.png" alt="discover_images" />
              <img src="images/advanture_image2.png" alt="discover_images" />
            </div>
          </div>

          <ul className="counterPart">
            <ul className='counter1 mainCounter'>
              <li className='counter'><CountUp start={0} end={10} duration={4} suffix='+'/></li>
              <li className='counterName'>Sports Activities</li>
            </ul>
            
            <ul className='counter2 mainCounter'>
              <li className='counter'><CountUp start={0} end={3}  duration={6} suffix='k+'/></li>
              <li className='counterName'>Registered Enthusiasts</li>
            </ul>

            <ul className='counter3 mainCounter'>
              <li className='counter'><CountUp start={0} end={15} duration={4} suffix='+'/></li>
              <li className='counterName'>Years of Experience</li>
            </ul>

            <ul className='counter4 mainCounter'>
              <li className='counter'><CountUp start={0} end={9.5} duration={2} decimals={1} decimal='.'/></li>
              <li className='counterName'>Average Rating</li>
            </ul>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Discover