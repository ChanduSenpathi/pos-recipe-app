import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import './LocationDisplay.css'
import { FaLocationCrosshairs, FaLocationDot } from 'react-icons/fa6';


export default function LocationDisplay() {
    const [address, setAddress] = useState();


    const getGeoLocationAddress = async() => {
        if('geolocation' in navigator){
            try {
                const position =await new Promise((resolve,reject)=>{
                    navigator.geolocation.getCurrentPosition(resolve, reject)
                })
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                
                const API_KEY = 'pk.58ed48f79166e77d293c0d4562d8a286';
                const url = `https://us1.locationiq.com/v1/reverse?key=${API_KEY}&lat=${latitude}&lon=${longitude}&format=json&`

                const response = await axios.get(url);
                setAddress(response.data.display_name);
                
            }catch(e){
                console.log(e);                
            }
        }   
    }
  return (
    <div className='border_bottom_solid'>
        <button type='button' className='get_location_btn mb-3' onClick={getGeoLocationAddress}>
            <FaLocationCrosshairs className='mx-2'/>
            Get Location</button>
            {address ? (
            <p className='user_address mt-2'>
                <FaLocationDot className='mx-2'/>
                 {address}</p>
            ): ''}
    </div>
  )
}
