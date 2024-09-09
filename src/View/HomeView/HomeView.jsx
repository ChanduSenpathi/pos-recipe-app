import React, { useEffect } from 'react'
import Home from '../../components/Home/Home'
import Sidebar from '../../components/Sidebar/Sidebar'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../../utils/firebase-config'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutHandler } from '../../store/store'

export default function HomeView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoggedOut, isMenuTrue} = useSelector(state => state.cards);
  // useEffect(()=>{
  //   onAuthStateChanged(firebaseAuth, (currentUser) => {
  //     currentUser ? navigate('/') : navigate('/login')
  //     dispatch(LogoutHandler(isLoggedOut));
  //   })
  // },[isLoggedOut, navigate])
  
  return (
    <section className='h-100 d-flex justify-content-between flex-wrap'>
        <Sidebar />
        <Home />
    </section>
  )
}
