import React, { useEffect, useState } from "react";
import style from "./Search.module.css";
import { SearchAll } from "../../Recoil/RecoilData";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const list = useRecoilValue(SearchAll);
  const toHome = useNavigate();
  function handleClick() {
    toHome("/home");
  }
  return (
    <div className={style.parent}>
      {/* <h1>this is search page</h1> */}
      <img className={style.imgwall}
        src="https://adm.dookinternational.com/dook/images/country/fIDw3FdA1649156983.png"
        alt="amazing places"
      />
      <button className={style.btn} onClick={handleClick}>
        Home
      </button>
      {list.map((x) => (
        <div className={style.maincard}>
          {/* {console.log(x.result_object.address)} */}
          <div className={style.card}>
            <img
              width="200px"
              height="250px"
              className={style.midimg}
              src={x?.result_object.photo?.images?.medium?.url}
              alt="pics"
            />
          </div>
          <div className={style.caption}>
            <span>{x?.result_object.photo?.caption}</span>
          </div>
          <br />
          <div className={style.address}>
            <h3>{x.result_object.address}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
