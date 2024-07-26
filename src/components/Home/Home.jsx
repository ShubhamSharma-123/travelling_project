import React  from 'react'
import { useEffect } from 'react';
import './Home.scss';
import { FaLocationDot } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaList } from "react-icons/fa";
import { TbAppsFilled } from "react-icons/tb";
import { FaTripadvisor } from "react-icons/fa";

//for the scroll animation
import Aos from 'aos';
import 'aos/dist/aos.css'

import video from '../../assets/video.mp4'


function Home() {

  //lets create a react hook to add a scroll animation....
  useEffect(()=>{
 Aos.init({duration:1})
  },[])

  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span data-aos="fade-up" className='smallText'>
            Our Packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
          </h1>

        </div>
        <div data-aos="fade-up" className="cardDiv gird">
          <div className="destinationInput">
            <label htmlFor="city">
              Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here....' />
              <FaLocationDot className='icon' />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">
              Select your date:</label>
            <div className="input flex">
              <input type="date"  />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className='total'>$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000"/>
            </div>
          </div>

          <div className="searchOptions flex">
          <FaFilter className='icon'/>
          <span>MORE FILTER</span>
          </div>
        </div>
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
          <FaFacebookF className='icon'/>
          <FaSquareInstagram  className='icon'/>
          <FaTripadvisor className='icon'/>
          </div>

          <div className="leftIcons">
          <FaList className='icon' />
          <TbAppsFilled className='icon'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home