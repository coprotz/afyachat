import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useData from '../../hooks/useData';
import { TbMenu2 } from "react-icons/tb";
import { BsChatLeftText } from "react-icons/bs";
import { MdArrowBack } from "react-icons/md";
import doc from '../../components/images/dr.jpg'
import DoctorCard from '../doctors/DoctorCard';
import Navbar from '../../components/navbar/Navbar';


const ViewClinic = () => {
    const { id } = useParams();
    const { clinics, doctors } = useData();
    const clinic = clinics && clinics.find(c => c.id === id)
    const navigate = useNavigate();

    console.log('clinics', clinic)

  return (
    <div className='view_clinic_inner'>
        {/* <Navbar/> */}
        <div className="view_clinic_body">
            <div className="view_clinic_top">
                <div className="view_upper_top">
                    <button onClick={() => navigate(-1)} className='btn_back1' ><MdArrowBack/></button>
                    <div className="view_photo">
                        Icon
                    </div>
                    <button>menu</button>
                </div>
                <h1 className='view_clinic_name'>{clinic && clinic.name}</h1> 
                <h3 className='view_doctors'>12 Doctors</h3>
                {/* <button className='btn_message'><BsChatLeftText/></button> */}
            </div>
            <div className="view_clinic_middle">
                <h4 className='view_clinic_title'>Clinic Info</h4>
                <p className='view_clinic_info'>
                    {clinic && clinic.desc}
                </p>
                
            </div>
            <div className="view_clinic_middle">
                <h4 className='view_clinic_title'>12 Doctors</h4>
                <div className="view_clinic_docs">
                    {doctors && doctors.map(doctor => (
                       <DoctorCard key={doctor.id} doctor={doctor}/> 
                    ))}                
                 
                </div>
                
            </div>
           
        </div>
      
    </div>
  )
}

export default ViewClinic
