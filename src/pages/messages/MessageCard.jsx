import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../config'
import useData from '../../hooks/useData'
import { useNavigate } from 'react-router-dom';
import moment from 'moment'


const MessageCard = ({message}) => {
    const [user] = useAuthState(auth)
    const { privates, patients, doctors } = useData();
    const { id, text, uid, createdAt, displayName, photoURL, caption } = message;
    const messageClass = uid === user.uid? 'sent': 'received';
    const bgClass = uid === user.uid? 'own' : 'sender';
    const navigate = useNavigate();
    

  return (
    <div className={`message ${messageClass}`}>
        <div className={`contents ${messageClass}`}>
            <div className="photo">
                <img src={photoURL} alt="" />
            </div>
            <div className={`text ${bgClass}`}>
                <div className="user-name">
                    <p >{ displayName}</p>
                </div>
                {/* {isImage? <img src={text} alt='' onClick={() => setDisplayImage(message)}/> : */}
                <p>{text}</p>
                {/* } */}
                {caption && <>{caption}</>}
                <small className='message_time'>{moment(createdAt && createdAt.toDate()).fromNow(true)}</small>
            </div>
        </div>
    </div>
  )
}

export default MessageCard
