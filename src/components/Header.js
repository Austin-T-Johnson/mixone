import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/MixOne-white-logo.png'
const Header = () => {
  return (
    <div className='header'>
       <Link to="/"><img src={logo} alt="logo" className='logo-img'></img></Link>
       <Link to="/">Home</Link>
       <Link to="/audio">Audio</Link>
       <Link to="/lighting">Lighting</Link>
       <Link to="/video">Video</Link>
       <Link to="/concert-event-photos">Concert Event Photos</Link>
       <Link to="/corporate-event-photos">Corporate Event Photos</Link>
       <Link to="/contact">Contact Us</Link>

    </div>
  )
}

export default Header