import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { auth, db } from '../../config';
import useData from '../../hooks/useData';
import { MdArrowBack } from "react-icons/md";
import { TbPhone, TbVideo, TbDotsVertical, TbPhoto, TbCamera} from "react-icons/tb";
import { MdAttachFile, MdSend } from "react-icons/md";
import './messages.css'
import MessageCard from './MessageCard';
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const ChatRoom = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth)
  const { privates, doctors, patients, clinics, messages } = useData();
  const chat = privates && privates.find(p =>p.id === id)
  const currentRoom = privates && privates.find(p => p.id === id)
  const doctor = doctors && doctors.find(d => d.userId === user.uid)
  const navigate = useNavigate();
  const memberId = chat && chat.members.find(m => m !== user.uid)
  const member = patients && patients.find(p => p.userId === memberId) 
  || doctors && doctors.find(d =>d.userId === memberId)
  || clinics && clinics.find(c => c.id === memberId)

  const scrollRef = React.useRef(null);

  console.log('currentRoom', currentRoom)

  React.useLayoutEffect(() => {
    if(scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  })

  const [text, setText] = useState('')
  const [loading, setLoading] = useState(null)
  const messagesRef = collection(db, 'messages')

  const handleMessage = async(e) => {
    e.preventDefault();

    setLoading(true)

    const data = {
      uid: user.uid,
      photoURL: user.photoURL, 
      createdAt: serverTimestamp(),
      text,
      room: id,
      displayName: doctor? doctor.name : user.displayName,

    }
    try {
      await addDoc(messagesRef, data)
      setLoading(null)
      setText('')
    } catch (error) {
        console.log(error.message)
    }
    
  }

  return (
    <div className='chat_room_container'>
      <div className="chat_room_top">               
          <div className="chat_member">
            <button onClick={() => navigate(-1)} className='btn_back2' ><MdArrowBack/></button>
            <div className="chat_member_photo">
              {member && member.photo? <img src={member && member.photo} alt="" /> : 
              <div className="member_icon" > {member && member.name[0]}</div>
              }
              
            </div>
            <h4>{member && member.name}</h4>
          </div>
          <div className="chat_member_right">
            <button><TbPhone/></button>
            <button><TbVideo/></button>
            <button><TbDotsVertical/></button>
          </div>
      </div>       
    <div className="chat_room_body">
      <div className="messages_container" ref={scrollRef}>
        {messages && messages.filter(m => m.room === id).map(message => (
          <MessageCard key={message.id} message={message}/>
        ))}
      </div>
      <form className="send_form" onSubmit={handleMessage}>
        <button><TbPhoto/></button>
        <button><MdAttachFile/></button>
        <button><TbCamera/></button>
        <input 
          type="text" 
          placeholder='Message' 
          className='send_input'
          name='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
        <button disabled={!text && loading}>{loading? 'Sending...': <MdSend/>}</button>
      </form>
    </div>
      
    </div>
  )
}

export default ChatRoom
