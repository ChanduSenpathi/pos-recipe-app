import React, { useState } from 'react'
import { firebaseAuth } from '../../utils/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutHandler } from '../../store/store';

export default function SignUp() {
  const [useDetails, setUserDetails] = useState({username: '' , email: '', password: '', confirmPassword: ''});
  const isLoggedOut = useSelector(state =>  state.cards.isLoggedOut);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async(e) => {
    e.preventDefault();    
    const {username , email, password, confirmPassword} = useDetails;
    if(username === '' || email === '' || password === '' || confirmPassword === ''){
      alert('Please fill all the details');
    }else {
      if(password !== confirmPassword){
        alert('Please Match passwords')
      }else {
        try {
          const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
          await updateProfile(userCredential.user, {
            displayName : username
          })
          console.log(userCredential)
          dispatch(LogoutHandler(isLoggedOut));
          setUserDetails({username : '', email : '', password : '', confirmPassword: ''})
        } catch(error) {
          console.log(error);
        }       
      }
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    currentUser && navigate('/')
  })

  return (
    <div className='login_page_container d-flex justify-content-center align-items-center w-100'>
        <section className='login_container p-5 mx-2'>
                <h1 className='text-center text-white'>Sign Up</h1>
                <form onSubmit={submitHandler} className='w-100'>
                    <div className='my-3'>
                        <label htmlFor='email' className='label_field my-2 text-white'>Username</label>
                        <input type="text" value={useDetails.username} onChange={(e) => setUserDetails({...useDetails, username : e.target.value})} className='w-100 common_input_field' name="email" placeholder='Enter Username'/>
                    </div>
                    <div className='my-3'>
                        <label htmlFor='email' className='label_field my-2 text-white'>Email</label>
                        <input type="email" value={useDetails.email} onChange={(e) => setUserDetails({...useDetails, email : e.target.value})} className='w-100 common_input_field' name="email" placeholder='Enter your Email'/>
                    </div>
                    <span></span>
                    <div className='my-3 position-relative top-0 left-0'>
                        <label htmlFor='password' className='label_field my-2 text-white'>Password</label>
                        <input type="password" value={useDetails.password} onChange={(e) => setUserDetails({...useDetails, password : e.target.value})} className='w-100 common_input_field' name="password" placeholder='Enter Password'/>
                    </div>
                    <div className='my-3 position-relative top-0 left-0'>
                        <label htmlFor='password' className='label_field my-2 text-white'>Confirm Password</label>
                        <input type="password" value={useDetails.confirmPassword} onChange={(e) => setUserDetails({...useDetails, confirmPassword : e.target.value})} className='w-100 common_input_field' name="password" placeholder='Enter Password'/>
                    </div>
                    <span></span>
                    <input type="submit" className="login_submit_btn my-2"  value="Submit"/>
                </form>
        </section>
    </div>
  )
}
