import React from 'react'
import useData from '../../hooks/useData'
import ClinicCard from './ClinicCard'
import './clinics.css'

const Clinics = () => {
    const { clinics } = useData();
  return (
    <div className='clinic_wrapper'>
        {clinics && clinics.map(clinic => (
             <ClinicCard key={clinic.id} clinic={clinic}/>
        ))}
     
    </div>
  )
}

export default Clinics
