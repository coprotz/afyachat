import React, { useState } from 'react'
import Doctor from './doctor/Doctor'
import Patient from './patient/Patient'
import './register.css'
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { useForm } from "react-hook-form";
import Footer from '../../components/footer/Footer';

const Register = () => {

    const [type, setType] = useState(1);
    

    const { register,  watch, formState: { isValid, isSubmitting, isSubmitSuccessful } } = useForm({mode: 'all'});
    // const [register, setRegister] = useState('')

    const group = watch('group')

    const handleSelect = () => {
        if(group === 'patient'){
            setType(2)
        }else if(group === 'doctor'){
            setType(3)
        }
    }

    // const props = { register, watch, type, setType, isValid, page, setPage }

    // const [register,setRegister] = useState({
    //     reg: ''
    // })

   

    console.log('group', group)

    const RenderType = () => {
        if(type === 1){
            return (
                <div className='register_welcome'>
                    <h2 className="register_heading">
                        Do you join as?
                    </h2>
                    <div className="register_selection"  >                       
                        <input 
                            type="radio" 
                            name='group' 
                            value='patient'
                            // value={register.reg || 'patient'} 
                            id='patient' 
                            style={{display: 'none'}} 
                            {...register("group", { required: true })}
                            // onChange={e => setRegister(e.target.value)}
                            // onChange={(e) => setRegister({...register, reg: e.target.value})}
                            />
                        <label htmlFor="patient" className='register_label'>Patient</label>                        
                        <input 
                            type="radio" 
                            name='group' 
                            value='doctor'  
                            // value={register.reg || 'doctor'} 
                            id='doctor' 
                            style={{display: 'none'}}
                            {...register("group", { required: true })}
                            // onChange={(e) => setRegister({...register, reg: e.target.value})}
                            />
                        <label htmlFor="doctor" className='register_label'>Doctor</label>
                    </div>
                    {/* {register.register && */}
                    <div className='handle_register'>
                        <button onClick={handleSelect} className='btn_register'>Continue</button>
                    </div>
                        
                    {/* } */}
                </div>
            )
        }else if(type === 2){
            return (
                <Patient setType={setType}/>
            )
        }else if(type === 3){
            return (
                <Doctor setType={setType}/>
            )
        }
    }
  return (
    <div className='register_container'>
        <div className="register_nav">
            <div className="register_log">
                <span style={{color: '#0d42d5'}}>Afya<strong>CHAT</strong></span>
            </div>
            <div className="register lang">
                <button className='btn-lang' style={{color: '#0d42d5', border:'1px solid #0d42d5'}}><HiOutlineGlobeAlt/> English</button>
            </div>
        </div>

        <div className="register_inner">
            {RenderType()}
        </div>
        <div className="register_footer">
          <Footer/>
        </div>
        
    </div>
  )
}

export default Register
