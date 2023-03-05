import React,{useState} from 'react'
import { desitnationID } from '../../Recoil/RecoilData';
import { chooosedHotel } from '../../Recoil/RecoilData';
import { useNavigate } from 'react-router-dom';
import {useRecoilValue,useSetRecoilState} from 'recoil'

export default function HotelBooking(){
  const [checkIn , setCheckIn] = useState("")
  const [checkOut , setCheckOut] = useState("")
  const  setSelectHotel = useSetRecoilState(chooosedHotel)
  const [list , setList] = useState([])
  const nav = useNavigate()
 
  const destId = useRecoilValue(desitnationID)


function handleSeeAllHotel(){
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43e138d2a8mshdd5783f8629f9afp105103jsnfac1b0bd9c7a',
      'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
    }
  };
  
  fetch(`https://apidojo-booking-v1.p.rapidapi.com/properties/list?offset=0&arrival_date=${checkIn}&departure_date=${checkOut}&guest_qty=1&dest_ids=${destId.dest_id}&room_qty=1&search_type=city&children_qty=2&children_age=5%2C7&search_id=none&price_filter_currencycode=USD&order_by=popularity&languagecode=en-us&travel_purpose=leisure`, options)
    .then(response => response.json())
    .then(response => setList(response.result))
    .catch(err => console.error(err));
}

function handleBook(x){
setSelectHotel(x)
nav('/hotelInfo')
}
  return(
<>
<div>
  <h4>CheckIn</h4>
<input onChange={(e)=>setCheckIn(e.target.value)} type="date"/>
<h4>ChekOut</h4>
<input onChange={(e)=>setCheckOut(e.target.value)} type="date"/>
<br/>
<br/>
<button onClick={handleSeeAllHotel}>See All Hotels</button>
<br/><br/>
{list.map(x=><div onClick={()=>handleBook(x)}>
  
  <h2>{x.hotel_name}</h2>
  <h2>{x.hotel_id}</h2>
  <h2>Min Price : {x.min_total_price}</h2>
  <h2>BreakFast INcluded : {x.hotel_include_breakfast ? "Yes" : "No"}</h2>
  <img src={x.main_photo_url} width="250px" alt='img'/>

  </div>)}

</div>
</>

  )
}