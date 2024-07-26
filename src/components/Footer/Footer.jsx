import React, { useEffect } from 'react'
import './Footer.scss'
import video2 from '../../assets/video (2).mp4'
import { IoIosSend } from "react-icons/io";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

//for the scroll animation
import Aos from 'aos';
import 'aos/dist/aos.css'


function Footer() {

  //lets create a react hook to add a scroll animation....
  useEffect(()=>{
    Aos.init({duration:1000})
     },[])
   

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"> </video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex'>SEND <IoIosSend className='icon' /></button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon' />
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet placeat non labore mollitia similique fugit excepturi ullam, et odit incidunt in sunt nisi perferendis itaque doloribus tempora pariatur quasi cum, sint adipisci fuga blanditiis reiciendis corrupti exercitationem. Provident necessitatibus odio asperiores nulla? Quisquam, in unde. Ex recusandae atque possimus expedita voluptates itaque alias architecto quasi aperiam soluta.
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <FaTwitter className='icon' />
              <FaYoutube className='icon' />
              <FaInstagram className='icon' />
              <FaTripadvisor className='icon' />


            </div>
          </div>


          <div className="footerLinks grid">
            {/* Group  One*/}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <MdChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <MdChevronRight className='icon' />
                Insurance
              </li>
              <li className="footerList flex">
                <MdChevronRight className='icon' />
                Agency
              </li>
              <li className="footerList flex">
                <MdChevronRight className='icon' />
                Tourism
              </li>
              <li className="footerList flex">
                <MdChevronRight className='icon' />
                Payment
              </li>

            </div>
            {/* Group  two*/}
            <div data-aos="fade-up"  data-aos-duration="4000" className="linkGroup">
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className="footerList flex">
                <MdChevronRight className='icon' />
                Bookings
              </li>
              <li className="footerList flex">
                <MdChevronRight className='icon' />
                Rentcars
              </li>
              <li className="footerList flex">
                <MdChevronRight className='icon' />
                HostelWorld
              </li>
              <li className="footerList flex">
                <MdChevronRight className='icon' />
                Trivago
              </li>
              <li className="footerList flex">
                <MdChevronRight className='icon' />
                TripAdvisor
              </li>

            </div>
            {/* Group  three*/}
            <div data-aos="fade-up"  data-aos-duration="5000" className="linkGroup">
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <MdChevronRight className='icon' />
                London
              </li>
              <li className="footerList flex">
                <MdChevronRight className='icon' />
                California
              </li>
              <li className="footerList flex">
                <MdChevronRight className='icon' />
                Indonesia
              </li>
              <li className="footerList flex">
                <MdChevronRight className='icon' />
                Europe
              </li>
              <li className="footerList flex">
                <MdChevronRight className='icon' />
                Oceania
              </li>

            </div>
          </div>

          <div className="footerDiv flex" >
              <small>BEST TRAVEL WEBSITE</small>
              <small>COPYRIGHTS RESERVED - SHUBHAMTECH- 2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer