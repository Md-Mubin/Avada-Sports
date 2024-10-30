import React from 'react'
import './Discover.css'
import { FaCircle } from 'react-icons/fa'

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

          <div className="counter">
            <ul className=''>
              <li></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Discover