import React from 'react'
import doc from '../../components/images/dr.jpg'
import { useNavigate, NavLink, Outlet } from 'react-router-dom'
import { BsPlusLg } from "react-icons/bs";
import {  useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../config';
import './main.css'
import Navbar from '../../components/navbar/Navbar';
import useData from '../../hooks/useData';
import { useEffect } from 'react';
import { useState } from 'react';


const Main = () => {
    const [user] = useAuthState(auth)
    const { patients, doctors } = useData()
    const navigate = useNavigate();
    const isPatient = patients && patients.find(p =>p.userId.includes(user && user.uid))
    const isDoctor = doctors && doctors.find(p =>p.userId.includes(user && user.uid))
    console.log('ispatient', isPatient)
    console.log('isDoctor', isDoctor)

   

    const RenderAccount = () => {
        if(isPatient){
            return (
                <div className='main_container'>
                <div className="main_welcome">
                    <Navbar/>
                    <div className="main_pinned">
                        <span>Pinned Doctors</span>
                        <div className="pinned_lists">
                            <button className='btn_add' onClick={() =>navigate('/main/doctors')}><BsPlusLg/></button>
                            <span className='pined_img'>
                                <img src={doc} alt="" />
                            </span>
                            <span className='pined_img'>
                                <img src={doc} alt="" />
                            </span>
                            <span className='pined_img'>
                                <img src={doc} alt="" />
                            </span>
                            <span className='pined_img'>
                                <img src={doc} alt="" />
                            </span>
                            <span className='pined_img'>
                                <img src={doc} alt="" />
                            </span>
                        </div>
                        <div className="main_menu_items">
                            <NavLink to='chats'>Chats</NavLink>
                            <NavLink to='clinics'>Clinics</NavLink>
                            <NavLink to='doctors'>Doctors</NavLink>
                            
                        </div>
                    </div>
                </div>
                <div className="main_body">
                    <Outlet/> 
                </div>
              
            </div>
            )
        }else if(isDoctor){
            return (
                <div className='main_container'>
                <div className="main_welcome">
                    <Navbar/>
                    <div className="main_pinned">                      
                        <div className="main_menu_items">
                            <NavLink to='chats'>Chats</NavLink>
                            <NavLink to='appointments'>Appointments</NavLink>
                            <NavLink to='incomes'>Incomes</NavLink>                            
                        </div>
                    </div>
                </div>
                <div className="main_body">
                    <Outlet/> 
                </div>
              
            </div>
            )
        }
    }

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
          setLoading(false)
        }, 3000)
      }, [])

  return (
    <div>
        {loading && <div className='loading_page'>Loading...</div>}
        {RenderAccount()}
    </div>
  )
}

export default Main
