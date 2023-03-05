import React from 'react'
import { chooosedHotel } from '../../Recoil/RecoilData'
import {useRecoilValue} from 'recoil'
import {Link, useNavigate} from 'react-router-dom'
import style from './SelectedHotel.module.css'
import { isLogIn } from '../../Recoil/RecoilData'
import Swal from 'sweetalert2'
export default function SelectedHotel(){
  const nav=useNavigate()
  
  const  IsLog=useRecoilValue(isLogIn)
  const hotel = useRecoilValue(chooosedHotel)
  function handleClick(){
    if(IsLog===true){
      Swal.fire('Your Booking Is Sucessfull !! ')
    }else{
      Swal.fire('Login First ')
      nav("/")
    }
   
}
  return(
    <>
    
<div className={style.main}>
<Link to="/home">Home</Link>
<div className={style.wrapper}>
  <img
                className={style.midimg}
                src={hotel?.result_object.photo?.images?.large?.url}
                alt="pics"
              />
              <h3>{hotel.result_object.name}</h3>
              <input type="date"/><p>Check In</p>
              <input type="date"/><p>Check Out</p>
                 <h3>
                {hotel.result_object.address}
              </h3>
              <h3>Price : {Math.floor(Math.random()*1000 )}</h3>
              <h3>Average Rating : {hotel.result_object?.rating}</h3>
              <h3>Status : {hotel.result_object?.is_closed ===true ? "Closed" :"Open"}</h3>

  <button className={style.btn} onClick={handleClick}>Book</button>
  </div>

</div>
    </>
  )
}