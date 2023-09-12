import React from 'react'
import { Container } from 'react-bootstrap'
import {FaFacebook, FaTwitter, FaTiktok, FaInstagram} from "react-icons/fa"

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='bg1 py-3'>
        <Container>
            <h3 className='text-center mb-3'>Follow Us</h3>
            <div className='text-center'>
              <FaFacebook className='mx-2' />
              <FaTwitter className='mx-2'/>
              <FaTiktok className='mx-2'/>
              <FaInstagram className='mx-2'/>
            </div>
            <p className='text-center mt-3'>Smashed &copy; {year} </p>
        </Container>
    </footer>
  )
}

export default Footer
