import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Info = () => {
    return (
        <header className='info'>
            <img src='https://pbs.twimg.com/profile_images/1328346782733045760/NjloAlik_400x400.jpg' alt='me' />
            <div className='content'>
                <h1>Mustafa Uşaklı</h1>
                <h4>Frontend Developer</h4>
                <h5>aelita.website</h5>
                <span className='contact'>
                    <button> <a href="mailto: mustafausakli_@hotmail.com"> <MdEmail /> Email </a></button>
                    <button className='bg-blue'> <a className='bg-blue' href='https://www.linkedin.com/in/mustafa-uşaklı-12887521b/'> <AiFillLinkedin /> Linkedin </a></button>
                </span>
            </div>
        </header>
    )
}

export default Info