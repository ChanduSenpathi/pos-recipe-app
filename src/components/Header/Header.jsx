import React, { useEffect, useState } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCirclePlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LoginHandler, LogoutHandler, searchItems, setAccessToken } from '../../store/store'
import { useNavigate } from 'react-router-dom'
import { firebaseAuth } from '../../utils/firebase-config'
import { signOut } from 'firebase/auth'


export default function Header() {
    const [date, setDate] = useState('');
    const {isLoggedIn, isLoggedOut} = useSelector(state => state.cards);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fullDateAndTime = () => {
        const date = new Date();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        
        const getSuffix = (day) => {
            switch (true) {
                case (day % 10 === 1 && day % 100 !== 11):
                    return 'st';
                case (day % 10 === 2 && day % 100 !== 12):
                    return 'nd';
                case (day % 10 === 3 && day % 100 !== 13):
                    return 'rd';
                default:
                    return 'th';
            }
        };
        
        const ampm = hours >=13 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10? '0' + minutes : minutes;
        setDate(`${month} ${day}${getSuffix(day)} ${year}, ${hours}: ${minutes} ${ampm}`)
    }

    useEffect(() =>{
        fullDateAndTime();
        setInterval(() => {
            fullDateAndTime();
        }, 1000);
        setTimeout(() => {
            dispatch(setAccessToken(firebaseAuth.currentUser.accessToken))
            if(firebaseAuth.currentUser.accessToken !== '') {
                dispatch(LogoutHandler(isLoggedOut))
            }
        }, 2000)
    },[]);

    const loginChecker = () => {
        dispatch(LoginHandler(isLoggedIn))
        isLoggedIn ? navigate('/login') : navigate('/signup')
    }
        
        const logoutUserHandler = () => {
            signOut(firebaseAuth).then(() => {
                dispatch(setAccessToken(''))
                navigate("/login")
            }).catch((error) => {
                console.log(error.message);
            });
            dispatch(LogoutHandler(isLoggedOut));
    }

  return (
    <header className='w-100 position-sticky top-0 bg-white z_index_50'>
        <div className='border_secondary w-100 right-0 p-4'>
            <div className='d-flex justify-content-between align-items-center flex-wrap gap-3'>
                <div className='d-flex justify-content-end align-items-center gap-5'>
                    <h1 className='header_logo_name'>
                        <span>P</span>
                        <span>O</span>
                        <span>S</span>
                    </h1>
                    {isLoggedOut && 
                    <div className='searchbar_input_field position-relative top-0'>
                        <span className='position-absolute search_icon_pos'><FontAwesomeIcon icon={faSearch}/></span>
                         <input type="text" placeholder='Search Product or any order...' onChange={(e) => dispatch(searchItems(e.target.value))} className='w-100 h-100' />
                    </div>
                    }
                </div>
                <div className='d-flex justify-content-center align-items-center gap-4 mx-3'>
                    <span className='header_time'>
                        <FontAwesomeIcon icon={faCalendarAlt} className='mx-2'/>
                        {date}</span>
                        {isLoggedOut ? (
                          <Button type='button' onClick={logoutUserHandler} className='add_table_btn position-relative top-0 left-0'>
                            <span>Logout</span>
                          </Button>  
                        ): (
                        <Button type='button' onClick={loginChecker} className='add_table_btn position-relative top-0 left-0'>
                            {isLoggedIn ? (
                                <span>Login</span>
                            ) : (
                                <span>SignUp</span>
                            )}
                        </Button>
                        )}
                </div>
            </div>
        </div>
    </header>
  )
}
