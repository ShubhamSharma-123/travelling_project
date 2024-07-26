import React, { useEffect } from 'react';
import './Main.scss';

//for the scroll animation
import Aos from 'aos';
import 'aos/dist/aos.css'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

//import image
import img1 from '../../assets/img (1).jpg'
import img2 from '../../assets/img (2).jpg'
import img3 from '../../assets/img (3).jpg'
import img4 from '../../assets/img (4).jpg'
import img5 from '../../assets/img (5).jpg'
import img6 from '../../assets/img (6).jpg'
import img7 from '../../assets/img (7).jpg'
import img8 from '../../assets/img (8).jpg'
import img9 from '../../assets/img (9).jpg'
import img10 from '../../assets/img (10).jpg'


function Main() {


  const Data = [
    {
      id:1,
      imgSrc:img1,
      destTitle: "Bali Island",
      loction: "Indonesia",
      grade: 'CULTURAL RELAX',
      fees: "$500",
      description: "Bali is a Indonesia Island and one of the best holiday destination in the Indonesia archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches"

    },
    {
      id:2,
      imgSrc:img2,
      destTitle: "Bali Island",
      loction: "Indonesia",
      grade: 'CULTURAL RELAX',
      fees: "$500",
      description: "Bali is a Indonesia Island and one of the best holiday destination in the Indonesia archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches"

    },
    {
      id:3,
      imgSrc:img3,
      destTitle: "Bali Island",
      loction: "Indonesia",
      grade: 'CULTURAL RELAX',
      fees: "$500",
      description: "Bali is a Indonesia Island and one of the best holiday destination in the Indonesia archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches"

    },
    {
      id:4,
      imgSrc:img4,
      destTitle: "Bali Island",
      loction: "Indonesia",
      grade: 'CULTURAL RELAX',
      fees: "$500",
      description: "Bali is a Indonesia Island and one of the best holiday destination in the Indonesia archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches"

    },
    {
      id:5,
      imgSrc:img5,
      destTitle: "Bali Island",
      loction: "Indonesia",
      grade: 'CULTURAL RELAX',
      fees: "$500",
      description: "Bali is a Indonesia Island and one of the best holiday destination in the Indonesia archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches"

    },
    {
      id:6,
      imgSrc:img6,
      destTitle: "Bali Island",
      loction: "Indonesia",
      grade: 'CULTURAL RELAX',
      fees: "$500",
      description: "Bali is a Indonesia Island and one of the best holiday destination in the Indonesia archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches"

    },
    {
      id:7,
      imgSrc:img7,
      destTitle: "Bali Island",
      loction: "Indonesia",
      grade: 'CULTURAL RELAX',
      fees: "$500",
      description: "Bali is a Indonesia Island and one of the best holiday destination in the Indonesia archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches"

    },
    {
      id:8,
      imgSrc:img8,
      destTitle: "Bali Island",
      loction: "Indonesia",
      grade: 'CULTURAL RELAX',
      fees: "$500",
      description: "Bali is a Indonesia Island and one of the best holiday destination in the Indonesia archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches"

    },
    {
      id:9,
      imgSrc:img9,
      destTitle: "Bali Island",
      loction: "Indonesia",
      grade: 'CULTURAL RELAX',
      fees: "$500",
      description: "Bali is a Indonesia Island and one of the best holiday destination in the Indonesia archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches"

    },
    {
      id:10,
      imgSrc:img10,
      destTitle: "Bali Island",
      loction: "Indonesia",
      grade: 'CULTURAL RELAX',
      fees: "$500",
      description: "Bali is a Indonesia Island and one of the best holiday destination in the Indonesia archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches"

    }
  ]

//lets create a react hook to add a scroll animation....
useEffect(()=>{
  Aos.init({duration:1000})
   },[])


  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>
          Most visited destination
        </h3>
      </div>
      <div className="secContent grid">
        {/* here we are going to use high order  array method(map) to dothat we shall use a list of object in one array i am going
        to create an array named date and from that we shall .map() array to fetch each destination at once i hope this willmake 
        sence to you */}
        {Data.map(({id,imgSrc,destTitle,location,grade,fees, description})=> 
        
            (
            <div key={id} data-aos="fade-up" className="singleDestination">
              {/*here ti will return single id from the map array   */}
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                <HiOutlineLocationMarker className='icon'/>
                <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>
                <button className='btn flex'>
                  DETAILS <LuClipboardCheck className='icon' />
                </button>
              </div>
            </div>
          )
        )}
      </div>

    </section>
  )
}

export default Main