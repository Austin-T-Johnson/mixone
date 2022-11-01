import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/MixOne-white-logo.png'
const Header = () => {
  return (
    <div className='header'>
       <Link to="/"><img src={logo} alt="logo" className='logo-img'></img></Link>
    </div>
  )
}

export default Header