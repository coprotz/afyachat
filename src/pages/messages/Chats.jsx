import React from 'react'
import {  useAuthState } from 'react-firebase-hooks/auth'
import ChatCard from './ChatCard'
import { auth } from '../../config'
import useData from '../../hooks/useData'

const Chats = () => {
  const [user] = useAuthState(auth)
  const { privates } = useData();
  const userChats = privates && privates.filter(p =>p.members.includes(user.uid))
  console.log('userchats', userChats)
  return (
    <div className='chats_container'>
      {userChats.length > 0? 
      <>      
        {userChats && userChats.map(chat => (
          <ChatCard chat={chat} key={chat.id}/>
        ))}
      </>
      : <span>You dont have chat rooms</span>}
    
    </div>
  )
}

export default Chats
