import React from 'react'
import img from '../assets/images/David-Guetta.jpeg'
import services from '../JSON/services.json'
import clients from '../JSON/clients.json'
const Landing = () => {
    return (
        <>
            <div className='top-container'>
                <div className='mix1-span-div'>
                    <span className='mix1-span'>MixOne Sound</span>
                </div>
                <div className='top-p-div'>
                    <p>Southern Californias Premiere Live Event Production Company</p>
                </div>
            </div>

            <div className='middle-container'>
                <div className='services-h1'>
                    <h1>Full-Service<br></br> Event Production Solution</h1>
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

            <div className='lower-container'>

                <div className='clients-h1'>
                    <h1>Clients We Have Worked With ↴</h1>
                </div>

                <div className='client-logo-container'>
                    {clients.map((client) => {
                        return (
                            <div className='client-logo-div'>
                                    <img className='client-logo' src={client.img} alt="client logos"></img>
                                </div>
                        )
                    })}
                </div>


            </div>


        </>

    )
}

export default Landing