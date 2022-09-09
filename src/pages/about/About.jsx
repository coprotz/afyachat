import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './about.css'

const About = () => {
  return (
    <div className='about_container'>
        <Navbar/>
        <div className="about_inner">
           <h1 className='about_title'>About</h1>
           <h3 className='about_desc'>We are dedicated in providing Proffessional Health Care solution at your hand..!</h3>
           <p>Through our Platform that enables Tanzanians to acquire medical and healthcare consultations 
            from specialized and competent Doctors at convenient way and lowest rates</p>
            <p>One stop solution for medical and clinical advices for all your healthcare problems!</p>
        </div>
      
    </div>
  )
}

export default About
