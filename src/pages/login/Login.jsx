import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import React from 'react'
import { auth } from '../../config';
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import './login.css'

const Login = () => {
    const navigate = useNavigate();

    const signWithGoogle = async (e) => {
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
        navigate('/main/chats')

    }



  return (
    <div className='login_container'>
        <div className="log_top">
       
          <button onClick={() => navigate('/')} className='btn_back' ><MdArrowBack/></button>
          <div className="login_welcome">
            AfyaCHAT
          </div>
        </div>
        <div className="login_wrapper">
          <button className='btn_google' onClick={signWithGoogle}><FcGoogle/>SignIn with Google</button>
        </div>

        
    </div>
  )
}

export default Login
