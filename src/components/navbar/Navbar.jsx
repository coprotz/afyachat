import { signOut } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { TbMenu2, TbX } from "react-icons/tb";
import { useNavigate, NavLink, Outlet } from 'react-router-dom'
import { auth } from '../../config';
import './navbar.css'


const Navbar = () => {
    const [open, setOpen] = useState(null)
    const navigate = useNavigate();
    const [user] = useAuthState(auth)

    const logOut = () => {
        signOut(auth)
        navigate('/')
    }
  return (
    <div className="main_top">
        <h4 onClick={() => navigate('/')}>AfyaCHAT</h4>
        <button className='btn_menu' onClick={() => setOpen(!open)}>{open? <TbX/> : <TbMenu2/>}</button>
        {open &&
        <div className="navbar_menu_items">
          {user &&<>
            <span onClick={()=>{navigate('/profile'); setOpen(null)}}>My Profile</span>
            <span onClick={()=>{navigate('/main/doctors'); setOpen(null)}}>Doctors</span>
            <span onClick={()=>{navigate('/main/chats'); setOpen(null)}}>Chats</span>
            <span onClick={()=>{navigate('/main/clinics'); setOpen(null)}}>Clinics</span>  
          </>}            
            <span onClick={()=>{navigate('/about'); setOpen(null)}}>About</span>                      
            <span onClick={()=>{navigate('/pricing'); setOpen(null)}}>Pricing</span>
            <span onClick={()=>{navigate('/blogs'); setOpen(null)}}>Blogs</span>            
            <span onClick={()=>{navigate('/contact'); setOpen(null)}}>Contact</span>
            <span onClick={()=>{navigate('/terms'); setOpen(null)}}>Terms</span>
            <span onClick={()=>{navigate('/privacy'); setOpen(null)}}>Privacy</span>
            {user &&<>
              <span onClick={logOut}>SignOut</span>
          </>} 
            
          
        </div>}
    </div>
  )
}

export default Navbar
