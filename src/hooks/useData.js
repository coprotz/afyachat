import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../config"

const useData = () => {
    const [clinics, setClinics] = useState([])
    const clinicsRef = collection(db, 'clinics')
    const [doctors, setDoctors] = useState([])
    const doctorsRef = collection(db, 'doctors')
    const [privates, setPrivates] = useState([])
    const privatesRef = collection(db, 'privates')
    const [departments, setDepartments] = useState([])
    const departsRef = collection(db, 'departments')
    const [patients, setPatients] = useState([])
    const patientsRef = collection(db, 'patients') 
    const [messages, setMessages] = useState([])
    const messagesRef = collection(db, 'messages')
    const [notifications, setNotifications] = useState([])
    const notificationsRef = collection(db, 'notifications')
    const [appointments, setAppointments] = useState([])
    const appointmentsRef = collection(db, 'appointments')

    useEffect(() => {
        onSnapshot(clinicsRef, snapshot => {
            setClinics(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
    },[])

    useEffect(() => {
        onSnapshot(notificationsRef, snapshot => {
            setNotifications(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
     },[])

    useEffect(() => {
        onSnapshot(doctorsRef, snapshot => {
            setDoctors(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
    },[])
    useEffect(() => {
        onSnapshot(privatesRef, snapshot => {
            setPrivates(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
    },[])

    useEffect(() => {
        onSnapshot(doctorsRef, snapshot => {
            setDoctors(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
     },[])
    
     useEffect(() => {
        onSnapshot(appointmentsRef, snapshot => {
            setAppointments(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
     },[])
    
     const q = query(messagesRef, orderBy("createdAt"));
    
     useEffect(() => {
        onSnapshot(q, snapshot => {
            setMessages(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
     },[])

     useEffect(() => {
        onSnapshot(patientsRef, snapshot => {
            setPatients(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }))
        })
     },[])

    return { clinics, doctors, privates, patients,  messages,  notifications, appointments }
}

export default useData;