import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import style from "./Restaurant.module.css";

export default function Restaurant() {
const toHome=useNavigate()
function handleClick(){
  toHome("/home")
}



  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  function handleChange(e) {
    setSearch(e.target.value);
  }
  async function handleSearch(search) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "43e138d2a8mshdd5783f8629f9afp105103jsnfac1b0bd9c7a",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    fetch(
      `https://travel-advisor.p.rapidapi.com/locations/search?query=${search.toLowerCase()}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`,
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setList(response.data.filter((x) => x.result_type === "restaurants"))
      )
      .catch((err) => console.log(err));
  }

  return (
    <div className={style.main} id={list.length == 0 ? style.bg : ""}>
      <h2
        style={{ fontSize: "5rem", marginTop: "1rem", color: "brown" }}
      >
        <i>Search Your Favourite Restaurant!</i>
      </h2>

      <input
        className={style.input1}
        placeholder="  search "
        onChange={handleChange}
        value={search}
      />
      <button className={style.btn} onClick={() => handleSearch(search)}>
        Search
      </button>
     <button className={style.btn} onClick={handleClick}>Home</button>
      {search ? (
        <div className={style.maincard}>
          {list.map((x) => (
            <div className={style.card}>
              {/* {console.log(x.result_object.address)} */}
              <div className={style.img}>
              <img
                className={style.midimg}
                src={x?.result_object.photo?.images?.large?.url}
                alt="pics"
              />
             </div>
              <br />
              <div className={style.address}>
              <h3>
                {x.result_object.address}
              </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1 style={{ color: "brown" }}>
            <i>Good manners brightens up every table around you.</i>
          </h1>
          {/* <img src="https://getsling.com/wp-content/uploads/2019/11/pasted-image-0-18.png" alt="restaurant"/> */}
        </div>
      )}
    </div>
  );
}
