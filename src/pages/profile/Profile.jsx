import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../../components/navbar/Navbar'
import { auth } from '../../config'
import { GrFormDown, GrFormUp } from "react-icons/gr";
import './profile.css'
import useData from '../../hooks/useData';
import { useState } from 'react';

const Profile = () => {
    const [user] = useAuthState(auth)
    const { patients, doctors } = useData();
    const patient = patients && patients.find(p => p.userId === user.uid)
    const isPatient = patients && patients.find(p =>p.userId.includes(user && user.uid))
    const isDoctor = doctors && doctors.find(p =>p.userId.includes(user && user.uid))
    const bday = new Date(patient && patient.dob);
    const today = new Date();

    const distance =  today.getTime() - bday.getTime();
    const daysOld = Math.floor(distance / (1000 * 60 * 60 * 24));
    const years = Number((daysOld/365).toFixed(0))

    const [show, setShow] = useState(null)
    const [active, setActive] = useState(null)

    const RenderProfile = () => {
        if(isPatient){
            return (
                <div className='profile_container'>
                <Navbar/>
                <div className="profile_inner">        
                    <div className="profile_card">
                        <div className="profile_photo">
                            <img src={user.photoURL} alt="" />
                        </div>
                        <h4>{user.displayName}</h4>
                        {/* <span>{user.email}</span>             */}
                    </div>
                    <div className="profile_item">
                        <h4>Age</h4>  
                        <span>{years} years</span>        
                    </div>
                    <div className="profile_item">
                        <h4>Gender</h4>  
                        <span>{patient && patient.sex}</span>          
                    </div>
                    <div className="profile_item">
                        <h4>Weight</h4>  
                        <span>{patient && patient.weight} kg</span>          
                    </div>
                    <div className="profile_item">
                        <h4>Height</h4>  
                        <span>{patient && patient.height} cm</span>          
                    </div>
                    <div className="profile_item">
                        <h4>Blood Group</h4>  
                        <span>{patient && patient.blood}</span>         
                    </div>
                    <div className="profile_item">
                        <h4>Diet</h4>  
                        <span>{patient && patient.diet}</span>         
                    </div>
                
                    <div className="profile_item">
                        <h4>Exercises</h4>  
                        <span>{patient && patient.exercises}</span>         
                    </div>
                    <div className="profile_item_outer" id='1'>
                        <div className="profile_item" onClick={() => {setActive(1)}} >
                            <h4>Drug Allergies</h4>  
                            {active===1? <GrFormUp/>:<GrFormDown/>} 
                        </div> 
                        {active===1 &&              
                        <div className="profile__items_down">
                            <ol>
                                 {patient && patient.allergies.map((item, index) =>(                     
                                   <li key={index}>{item}</li>                     
                                ))}
                            </ol>
                        </div>}        
                    </div>
                    <div className="profile_item_outer">
                        <div className="profile_item" onClick={() => {setActive(2)}}>
                            <h4>Surgeries undertaken</h4>  
                            {active===2? <GrFormUp/>:<GrFormDown/>} 
                        </div> 
                        {active===2 &&               
                        <div className="profile__items_down">
                            <ol>
                                 {patient && patient.operations.map((item, index) =>(                     
                                   <li key={index}>{item}</li>                     
                                ))}
                            </ol>
                        </div>}        
                    </div>
                    <div className="profile_item_outer">
                        <div className="profile_item" onClick={() => {setActive(3)}}>
                            <h4>Historical Diseases</h4>  
                            {active===3? <GrFormUp/>:<GrFormDown/>} 
                        </div> 
                        {active===3 &&              
                        <div className="profile__items_down">
                            <ol>
                                 {patient && patient.diseases.map((item, index) =>(                     
                                   <li key={index}>{item}</li>                     
                                ))}
                            </ol>
                        </div>}        
                    </div>
                    <div className="profile_item_outer">
                        <div className="profile_item" onClick={() => {setActive(4)}}>
                            <h4>Under Medication</h4>  
                            {active===4? <GrFormUp/>:<GrFormDown/>} 
                        </div> 
                        {active===4 &&              
                        <div className="profile__items_down">
                            <ol>
                                 {patient && patient.medications.map((item, index) =>(                     
                                   <li key={index}>{item}</li>                     
                                ))}
                            </ol>
                        </div>}        
                    </div>
                  
                    <div className="profile_item">
                        <h4>Smoke</h4>  
                        <span>{patient && patient.smoke}</span>         
                    </div> 
                    <div className="profile_item">
                        <h4>Alcohol</h4>  
                        <span>{patient && patient.alcohol}</span>         
                    </div>
                    <div className="profile_item">
                        <h4>Caffeine</h4>  
                        <span>{patient && patient.caffeine}</span>        
                    </div>      
                
                    
                </div>
            </div>
            )
        }else if(isDoctor){
            return (
                <div className='profile_container'>
                <Navbar/>
                <div className="profile_inner">        
                    <div className="profile_card">
                        <div className="profile_photo">
                            <img src={isDoctor && isDoctor.photo} alt="" />
                        </div>
                        <h4>{isDoctor && isDoctor.name}</h4>
                        <small className='doc_edu'>{isDoctor && isDoctor.education}</small>
                        
                        {/* <span>{user.email}</span>             */}
                    </div>
                    <div className="profile_card">
                            {isDoctor && isDoctor.about}
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
                                {isDoctor && isDoctor.specializes.map((item, index) =>(                     
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
                                {isDoctor && isDoctor.languages.map((item, index) =>(                     
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
            </div>
            )
        }
    }
  return (
   <>
    {RenderProfile()}
   </>
  )
}

export default Profile
