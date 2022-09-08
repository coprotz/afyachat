import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './about.css'

const About = () => {
  return (
    <div className='about_container'>
        <Navbar/>
        <div className="about_inner">
           <h1 className='about_title'>About</h1>
           <h3 className='about_desc'>We are dedicating in providing Proffessioal Health Care for all..!</h3>
           <p>Through our Platform that enabling Tanzanians to acquire medical and healthcare consultations 
            from specialized and competent Doctors at convenient way and lowest rates</p>
            <p>One stop solutions for medical and clinical for all your healthcare problems</p>
        </div>
      
    </div>
  )
}

export default About
