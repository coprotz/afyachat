import {  useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css';
import React, { useEffect, useState } from 'react';
import { auth } from './config';
import ChatRoom from './pages/messages/ChatRoom';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';
import Spinner from './components/spinner/Spinner';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import Chats from './pages/messages/Chats';
import Contacts from './pages/messages/Contacts';
import Clinics from './pages/clinics/Clinics';
import Doctors from './pages/doctors/Doctors';
import ViewClinic from './pages/clinics/ViewClinic';
import ViewDoctor from './pages/doctors/ViewDoctor';
import Profile from './pages/profile/Profile';
import Appointments from './pages/appointments/Appointments';
import Incomes from './pages/incomes/Incomes';
import About from './pages/about/About';
import Pricing from './pages/pricing/Pricing';



function App() {
  const [currentRoom, setCurrentRoom] = useState("General")
  const [user] = useAuthState(auth)
  const [loading, setLoading] = useState(true)

  console.log('user', user)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  const RequireAuth = ({children}) => {
    return user ? (children) : <Navigate to="/"/>
  }

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/pricing" element={<Pricing />}/>
          <Route exact path="/clinics/:id" element={
            <RequireAuth>
              <ViewClinic />
            </RequireAuth>            
          }/>
          <Route exact path="/doctors/:id" element={
            <RequireAuth>
               <ViewDoctor />
            </RequireAuth>           
          }/>
            <Route exact path="/profile" element={
            <RequireAuth>
               <Profile />
            </RequireAuth>           
          }/>
          <Route exact path="/chats/:id" element={
            <RequireAuth>
              <ChatRoom />
            </RequireAuth>
            
          }/>
          <Route exact path="main" element={
       
               <Main />
        
           
            }>
            <Route path='chats' element={<Chats/>}></Route>
            <Route path='clinics' element={<Clinics/>}></Route>
            <Route path='doctors' element={<Doctors/>}></Route>
            <Route path='appointments' element={<Appointments/>}></Route>
            <Route path='incomes' element={<Incomes/>}></Route>
          </Route>
        </Routes>
      </Router>
      {/* {loading && <Spinner/>} */}
      {/* <Navbar 
        user={user}
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom} 
      /> */}
      {/* <div className='contents_wrapper'>
        {user ? <ChatRoom currentRoom={currentRoom}/> : <Login />}
      </div> */}
    </div>
  );
}

export default App;
