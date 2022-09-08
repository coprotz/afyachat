import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { auth } from '../../config';
import './home.css'

const Home = () => {

    const navigate = useNavigate()
    const [user] = useAuthState(auth)
  return (
    <div className='home'>
        <div className="home_top">
            AfyaCHAT
        </div>
       
        <div className="home_bottom">
            <span>Welcome to AfyaCHAT</span>
            {user? <button className='btn_started' onClick={() => navigate('/main/chats')}>My Account</button> 
            : <button className='btn_started' onClick={() => navigate('/login')}>GET STARTED</button> }
        
            <div className="home_footer">
                <span onClick={() =>navigate('/')}>Home</span>
                <span onClick={() =>navigate('/about')}>About</span>
                <span onClick={() =>navigate('/pricing')}>Pricing</span>
                <span>Terms</span>
                <span>Privacy</span>
                <span>Contact</span>
            </div>
        </div>
      
    </div>
  )
}

export default Home
