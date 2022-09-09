import React from 'react'
import { MdArrowBack } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import useData from '../../hooks/useData';
import { GrFormDown,GrFormUp } from "react-icons/gr";
import { useState } from 'react';


const ViewDoctor = () => {
    const { id } = useParams();
    const { doctors } = useData();
    const doctor = doctors && doctors.find(c => c.id === id)
    const [active, setActive] = useState(null)
    const navigate = useNavigate();
  return (
    <div className='view_doc_wrapper'>
        <div className="view_upper_top">
            <button onClick={() => navigate(-1)} className='btn_back1' ><MdArrowBack/></button>            
            <img src={doctor && doctor.photo} alt="" />          
            <button>menu</button>
        </div>
        <h4 className='doc_name'>{doctor && doctor.name}</h4>
        <small className='doc_edu'>{doctor && doctor.education}</small>
        <div className="doc_div">
            {doctor && doctor.about}
        </div>
        <div className="profile_item_outer">
                <div className="profile_item" onClick={() => {setActive(1)}}>
                    <h4>Personal Info</h4>  
                    {active===1? <GrFormUp/>:<GrFormDown/>} 
                </div> 
                {active===1 &&              
                <div className="profile__items_down">
                   profile
                </div>}        
          </div>
          <div className="profile_item_outer">
                <div className="profile_item" onClick={() => {setActive(2)}}>
                    <h4>Specializes</h4>  
                    {active===2? <GrFormUp/>:<GrFormDown/>} 
                </div> 
                {active===2 &&              
                <div className="profile__items_down">
                    <ol>
                         {doctor && doctor.specializes.map((item, index) =>(                     
                           <li key={index}>{item}</li>                     
                        ))}
                    </ol>
                </div>}        
          </div>
          <div className="profile_item_outer">
                <div className="profile_item" onClick={() => {setActive(3)}}>
                    <h4>Languages</h4>  
                    {active===3? <GrFormUp/>:<GrFormDown/>} 
                </div> 
                {active===3 &&              
                <div className="profile__items_down">
                    <ol>
                         {doctor && doctor.langs.map((item, index) =>(                     
                           <li key={index}>{item}</li>                     
                        ))}
                    </ol>
                </div>}        
          </div>
          <div className="profile_item_outer">
                <div className="profile_item" onClick={() => {setActive(4)}}>
                    <h4>Patient Reviews</h4>  
                    {active===4? <GrFormUp/>:<GrFormDown/>} 
                </div> 
                {active===4 &&              
                <div className="profile__items_down">
                   reviews
                </div>}        
          </div>
      
    </div>
  )
}

export default ViewDoctor
