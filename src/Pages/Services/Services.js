import React from "react";
import { useNavigate } from "react-router-dom";
import style from './Services.module.css'

export default function Services(){
    const toHome = useNavigateg();
    function handleClick() {
        toHome("/home");
      }
    return(
        <div className={style.main}>
    <h1><i>Services Provided by Travelicious</i></h1>
    <button className={style.btn} onClick={handleClick}>
        Home
      </button>
    <iframe  className={style.utube} width="900" height="600" src="https://www.youtube.com/embed/8gzRmO-bqtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe  className={style.utube} width="900" height="600" src="https://www.youtube.com/embed/1F4Nk4CY7nw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}
