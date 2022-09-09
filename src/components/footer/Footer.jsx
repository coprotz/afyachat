import React from 'react'
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className="home_footer">
        <span onClick={() =>navigate('/')}>Home</span>
        <span onClick={() =>navigate('/about')}>About</span>
        <span onClick={() =>navigate('/pricing')}>Pricing</span>
        <span>Terms</span>
        <span>Privacy</span>
        <span>Contact</span>
    </div>
  )
}

export default Footer
