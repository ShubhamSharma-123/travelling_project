import React, { useState } from 'react';
import './Navbar.scss';
import {MdOutlineTravelExplore } from 'react-icons/md';
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";


export default function Navbar() {
  const [active, setActive] = useState('navBar')
  
  //function to toggle navBar
  const showNav= ()=>{
    setActive("navBar activeNavbar")
  }

   //function to remove navBar
   const removeNav= ()=>{
    setActive("navBar")
  }



  return (
    <section className='navBarSec'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className='logo flex'>
            <h1> <MdOutlineTravelExplore className="icon"/> Trippy</h1>
          </a>
        </div>
        
        <div className={active}>
          <ul className="navLists flex" >
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            
            <li className="navItem">
              <a href="#" className="navLink">Pakages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>
            <button className='btn'>
              <a href="">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
          <IoCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  )
}
