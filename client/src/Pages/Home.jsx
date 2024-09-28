import React from 'react'
import Navbar from '../Components/Navbar'
import '../assets/css/home.css'
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='home'>
        <h1 className='home-title'>
          Contact Management System
        </h1>
        <p className='home-description'>
            Start collecting your contacts in avery smarter way.
            We provide very efficient and smarter way to handle contacts
        </p>
    </div>
    </>
  )
}

export default Home
