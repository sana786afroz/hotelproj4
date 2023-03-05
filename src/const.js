import React from "react";
import {MdFlight} from 'react-icons/md'
import {RiHotelLine} from 'react-icons/ri'
import {MdOutlineLocalOffer} from 'react-icons/md'
import {FaSuitcase} from 'react-icons/fa'
import {GiAlliedStar} from 'react-icons/gi'
import {TbHeadset} from 'react-icons/tb'
import { Link } from "react-router-dom";

export const arrs=[
    {
    icon:<MdFlight style={{fontSize:"28px"}}/>,
    text:<Link to="/airport">Airports</Link>,
    },
    {
      icon:<RiHotelLine  style={{fontSize:"28px"}}/>,
      text:<Link to="/hotel">Hotels</Link>,
    },
    {
      icon:<MdOutlineLocalOffer style={{fontSize:"28px"}}/>,
      text:<Link to="/restaurant">Restaurant</Link>,
    },
    {
     icon:<FaSuitcase style={{fontSize:"28px"}}/>,
     text:<Link to="/PlanActivity">PlanActivity</Link>
    },
   
    {
     icon:<TbHeadset style={{fontSize:"28px"}}/>,
     text:<Link to ="/Services">Services</Link>,
    }
]