import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'
import { auth } from '../../config';
import useData from '../../hooks/useData'
import moment from 'moment'

const ChatCard = ({chat}) => {
  const { privates, patients, doctors, clinics, messages } = useData();
  const [user] = useAuthState(auth)
  const memberId = chat && chat.members.find(m => m !== user.uid)
  const member = patients && patients.find(p => p.userId === memberId) 
  || doctors && doctors.find(d =>d.userId === memberId)
  || clinics && clinics.find(c => c.id === memberId)

  const lastMsg = messages && messages.findLast((m) => m.room === chat.id)
  const roomMsgs = messages && messages.filter((m) => m.room === chat.id)

  const navigate = useNavigate();



  console.log('member', member)
  return (
    <div className='chart_card' onClick={() =>navigate(`/chats/${chat.id}`)}>        
      <div className="card_inner">
        <div className="card_img">
          {member && member.photo? <img src={member && member.photo} alt="" /> : 
              <div className="member_icon" style={{backgroundColor: '#7d25d7', color: 'white'}} > {member && member.name[0]}</div>
              }
        </div>
        <div className="card_body">
            <div className="sender_name">{member && member.name}</div>        
            <p className="last_text">{lastMsg && lastMsg.text}</p>            
        </div>
      </div>
      <div className="card_status">
        <small>{moment(lastMsg && lastMsg.createdAt.toDate()).fromNow(true)}</small>
        <span className='counts_chats'>{roomMsgs && roomMsgs.length}</span>
      </div>
    </div>
  )
}

export default ChatCard
