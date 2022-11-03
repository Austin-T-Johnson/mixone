import React, { useState } from 'react'
import services from '../JSON/services.json'
import clients from '../JSON/clients.json'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

const Landing = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();
       
        let post = { name: name, email: email, message: message };
        let regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        try {
            if (name == "" || email == "" || message == "") {
                
                toast.error("Please fill out all fields")
            } else if (!regEx.test(email)) {
                
                toast.error("Please enter a valid email address")
            }
            else {
                await axios.post("/api/contact", post);
                toast.success("Message Sent!")
                
                setName('')
                setEmail('')
                setMessage('')
            }

        } catch (error) {
            console.log(error)
        }
    }


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
                    {clients.map((client, idx) => {
                        return (
                            <div className='client-logo-div' key={idx}>
                                    <img className='client-logo' src={client.img} alt="client logos"></img>
                                </div>
                        )
                    })}
                </div>

                <section className="form">
                <div className="get-in-touch-div">
                    <h2 className="get-in-touch">Contact Us</h2>
                </div>
                <div className="contact-text-container">
                    <span className="contact-text">If you have any questions please feel free to reach out.</span>
                </div>
                <form className="contact-form">
                    <div className="input-div">
                        <label className="label">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} className="input-input" type="text" />
                    </div>

                    <div className="input-div">
                        <label className="label">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="input-input" type="email" />
                    </div>

                    <div className="input-div">
                        <label className="label">Message</label>
                        <input value={message} onChange={(e) => setMessage(e.target.value)} className="input-input" type="text" />
                    </div>
                </form>
                <div className="btn-content">
                    <button onClick={onSubmit}>Submit</button>
                    <Toaster />
                </div>

            </section>
        </div>


        </>

    )
}

export default Landing