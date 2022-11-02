import React from 'react'
import img from '../assets/images/David-Guetta.jpeg'
const Landing = () => {
  return (
    <div className='top-container'>
        <div className='img-div'>
            <img src={img} alt="David Guetta On Stage"></img>
        </div>
        <div className='span-div'>
             <span>MixOne Sound</span> 
             <p>Southern Californias Premiere Live Event Production Company</p>
        </div>
       
    </div>
  )
}

export default Landing