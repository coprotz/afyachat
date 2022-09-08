import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../config'
import useData from '../../hooks/useData'

const ClinicCard = ({clinic}) => {
  const [open, setOpen] = useState(null)
  const navigate = useNavigate();
  const { privates } = useData();
  const [user] = useAuthState(auth);
  const userChats = privates && privates.filter(c => c.members.includes(`${user.uid}`))
  const chatsRef = collection(db, 'privates')
  const [loading, setLoading] = useState(null)

  const handleChat = async(e, id) => {
    e.preventDefault();
    setLoading(true)

    try {
      const oldChat = userChats && userChats.find(c => c.members.includes(`${id}`))
      if(oldChat){
        navigate(`/chats/${oldChat.id}`)
      }else{
        const data = {
          members: [`${id}`, `${user.uid}`]
        }
        const newChat = await addDoc(chatsRef, data)
        navigate(`/chats/${newChat.id}`)
      }
      setLoading(null)
    } catch (error) {
      console.log(error.message)
    }

  }
  return (
    <div className='clinic_card' onClick={() =>setOpen(!open)}>        
      <div className="clinic_inner">
        <div className="clinic_logo">
            {clinic.name[0]}
        </div>
        <h3>{clinic.name}</h3>
      </div>
      <div className="card_action">
        <div className={open? 'count_none': "doctors_counts"}>12</div>
        {open &&
        <div className="card_btns">
          <button onClick={() =>navigate(`/clinics/${clinic.id}`)}>view</button>
          <button onClick={(e) =>handleChat(e,clinic.id)}>{loading? 'Sending...': 'Chat'}</button>         
        </div>}
      </div>
      
    </div>
  )
}

export default ClinicCard
