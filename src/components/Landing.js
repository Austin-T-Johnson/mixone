import React from 'react'
import img from '../assets/images/David-Guetta.jpeg'
const Landing = () => {
  return (
    <div className='top-container'>
        <div className='img-div'>
            <img src={img} alt="David Guetta On Stage"></img>
        </div>
        <span>MixOne Sound <br></br><br></br>Southern Californias Premiere Live Event Production Company</span>
    </div>
  )
}

export default Landing