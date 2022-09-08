import React from 'react'
import { useState } from 'react'
import doc from '../../components/images/dr.jpg'
import { useNavigate } from 'react-router-dom'
import useData from '../../hooks/useData'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../config'
import { addDoc, collection } from 'firebase/firestore'



const DoctorCard = ({doctor}) => {
    const [open, setOpen] = useState(null)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(null)
    const [user] = useAuthState(auth);
    const { privates } = useData();
    const chatsRef = collection(db, 'privates')

    const userChats = privates && privates.filter(p => p.members.includes(`${user.uid}`))

    const handleChat = async (e, id) => {
      e.preventDefault();

      setLoading(true)
      try {
        const oldChat = userChats && userChats.find(u =>u.members.includes(`${id}`)) 
        if(oldChat){
          navigate(`/chats/${oldChat.id}`)
        }else{
          const data = {
            members: [`${user.uid}`, `${id}`]
          }
          const newChat = await addDoc(chatsRef, data)
          navigate(`/chats/${newChat.id}`)
          setLoading(null)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  return (
    <div className="card_doctor" onClick={() =>setOpen(!open)}>
        <div className="card_doc_photo">
            <img src={doctor && doctor.photo} alt="" />
        </div>
        <h4>{doctor && doctor.name}</h4>
        {open &&
        <div className="card_btns">
          <button onClick={() =>navigate(`/doctors/${doctor.id}`)}>view</button>
          <button onClick={(e) =>handleChat(e, doctor.userId)}>{loading? 'Inviting...': 'Message'}</button>
        </div>}
    </div>
  )
}

export default DoctorCard
