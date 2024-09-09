import React, { useState } from 'react'
import './Login.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutHandler } from '../../store/store';

export default function Login() {
    const [eye, setEye] = useState(false);
    const [useDetails, setUserDetails] = useState({email: '', password: ''});
    const isLoggedOut = useSelector(state =>  state.cards.isLoggedOut);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const showHidePassword  =() => {
        setEye(!eye)
        const passCls = document.getElementsByClassName('common_input_field')
        eye ? passCls[1].setAttribute('type', 'text') : passCls[1].setAttribute('type', 'password')        
    }

    const handleSubmit = async(e) => {
        e.preventDefault();  
        const {email, password} = useDetails;
        if(email === "" || password === "" ){
            alert('Please fill the fields')
        }else {
            try {
                await signInWithEmailAndPassword(firebaseAuth, email, password);     
                navigate('/');             
                dispatch(LogoutHandler(isLoggedOut));
                setUserDetails({email: '', password : ''});       
            } catch(error){
                alert('User Details Not Found! Please Create Account');
                navigate('/signup');              
            }        
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser)=>{
        currentUser && navigate('/')
    })

  return (
    <div className='login_page_container d-flex justify-content-center align-items-center w-100'>
        <section className='login_container p-5 mx-2'>
                <h1 className='text-center text-white'>Login</h1>
                <form onSubmit={handleSubmit} className='w-100'>
                    <div className='my-3'>
                        <label htmlFor='email' className='label_field my-2 text-white'>Email</label>
                        <input type="email" value={useDetails.email} onChange={(e) => setUserDetails({...useDetails, email : e.target.value})} className='w-100 common_input_field' name="email" placeholder='Enter your Email'/>
                    </div>
                    <span></span>
                    <div className='my-3 position-relative top-0 left-0'>
                        <label htmlFor='password' className='label_field my-2 text-white'>Password</label>
                        <input type="password" value={useDetails.password} onChange={(e) => setUserDetails({...useDetails, password : e.target.value})} className='w-100 common_input_field' name="password" placeholder='Enter Password'/>
                        <div className='show_password'>
                           <button type='button' className='eye_btn' onClick={showHidePassword}>
                                {eye ? <FaEye /> : <FaEyeSlash/>}
                            </button>
                        </div>
                    </div>
                    <span></span>
                    <input type="submit" className="login_submit_btn my-2"  value="Submit"/>
                </form>
        </section>
    </div>
  )
}
