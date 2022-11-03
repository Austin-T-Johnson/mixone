import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/MixOne-white-logo.png'
const Header = () => {
    return (
        <div className='header'>
            <NavLink to="/"><img src={logo} alt="logo" className='logo-img'></img></NavLink>
            <button className='links'><NavLink to="/" className={(link) => link.isActive ? "active" : ""}>Home</NavLink></button>
            <button className='links'><NavLink to="/audio" className={(link) => link.isActive ? "active" : ""}>Audio</NavLink></button>
            <button className='links'><NavLink to="/lighting" className={(link) => link.isActive ? "active" : ""}>Lighting</NavLink></button>
            <button className='links'><NavLink to="/video" className={(link) => link.isActive ? "active" : ""}>Video</NavLink></button>
            <button className='links'> <NavLink to="/concert-event-photos" className={(link) => link.isActive ? "active" : ""}>Concert Event Photos</NavLink></button>
            <button className='links'><NavLink to="/corporate-event-photos" className={(link) => link.isActive ? "active" : ""}>Corporate Event Photos</NavLink></button>
            <button className='links'> <NavLink to="/contact" className={(link) => link.isActive ? "active" : ""}>Contact Us</NavLink></button>

        </div>
    )
}

export default Header