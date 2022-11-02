import React from 'react'
import img from '../assets/images/David-Guetta.jpeg'
import services from '../JSON/services.json'

const Landing = () => {
    return (
        <div className='top-container'>
            <div className='img-div'>
                <img src={img} alt="David Guetta On Stage" className='david-guetta-img'></img>
            </div>
            <div className='span-div'>
                <span className='mix1-span'>MixOne Sound</span>
            </div>
            <div className='p-div'>
                <p>Southern Californias Premiere Live Event Production Company</p>
            </div>

            <div className='lower-container'>

                <div className='services-h1'>
                    Full-Service Event Production Solution
                </div>

                <div className='services-container'>
                    {services.map((service) => {
                        return (
                            <div className='services-inner-container' key={service.id}>
                                <div className='services-txt-div'>
                                    <h3 className='services-name'>{service.name}</h3>
                                    <span className='services-txt'>{service.txt}</span>
                                </div>
                                <img className='services-img' src={service.img} alt="services we provide"></img>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Landing