import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import Footer from '../../components/footer/Footer';
import { auth } from '../../config';
import './home.css'

const Home = () => {

    const navigate = useNavigate()
    const [user] = useAuthState(auth)
  return (
    <div className='home'>
        <div className="home_top">
            <span>Afya<strong>CHAT</strong></span>         
        </div>
       
        <div className="home_bottom">
            <span>Welcome to AfyaCHAT</span>
            {user? <button className='btn_started' onClick={() => navigate('/main/chats')}>My Account</button> 
            : <button className='btn_started' onClick={() => navigate('/login')}>GET STARTED</button> }
        
            <Footer/>
        </div>
      
    </div>
  )
}

export default Home
