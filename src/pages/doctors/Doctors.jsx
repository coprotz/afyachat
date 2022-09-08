import React, {useState} from 'react'
import DoctorCard from './DoctorCard'
import './doctors.css'
import { BsSearch } from "react-icons/bs";
import useData from '../../hooks/useData';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const {  doctors } = useData();
  return (
    <div className='doctors_container'>
        <div className="search_doctor">
            <BsSearch/>
            <input 
              type="text" 
              placeholder='Type to Search Doctor' 
              className='search_doc'
              onChange={(e) => setSearchTerm(e.target.value)} 
              />
        </div>
        {searchTerm !=='' &&
        <div className="doctors_inner">
          {doctors && doctors.filter((val) => {
              if(searchTerm === ''){
                  return val
              }else if(val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return val
                }
            }).map(doctor => (
                  <DoctorCard                
                      doctor={doctor}
                  />
        ))}
      </div>}
    </div>
  )
}

export default Doctors
