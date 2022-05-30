import React from 'react'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='socialMedia'>
            <a href='https://twitter.com/Mustafausakli'> <BsTwitter /> </a>
            <a href='https://www.instagram.com/mustafausakli.20/'> <AiFillInstagram /> </a>
            <a href='https://www.linkedin.com/in/mustafa-uşaklı-12887521b/'> <AiFillLinkedin /> </a>
            <a href='https://github.com/lyokocode'> <BsGithub /> </a>
        </footer>
    )
}

export default Footer