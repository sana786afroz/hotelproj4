import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Airport.module.css";
export default function Airport() {

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
      `https://travel-advisor.p.rapidapi.com/airports/search?query=${search.toLowerCase()}&locale=en_US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setList(response))
      .catch((err) => console.error(err));
  }
  return (
    <div className={style.main} id={list.length === 0 ? style.bg : ""}>
      <h1>Search Airports</h1>
      <input
        className={style.input1}
        placeholder="search"
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
            <div  className={style.card}>
              <div className={style.name}>
              <h3
                // style={{
                //   marginLeft: "15rem",
                //   fontSize: "1.5rem",
                //   backgroundColor: "rgba(107, 80, 151, 0.678)",
                // }}
              >
                {x.name}
              </h3>
              </div>
              <div className={style.cityname}>
              <h3
                // style={{
                //   marginLeft: "15rem",
                //   fontSize: "1.5rem",
                //   backgroundColor: "rgba(107, 80, 151, 0.678)",
                // }}
              >
                {x.city_name}
              </h3>
              </div>
              <div className={style.displayname}>
              <h3
                // style={{
                //   marginLeft: "15rem",
                //   fontSize: "1.5rem",
                //   backgroundColor: "rgba(107, 80, 151, 0.678)",
                // }}
              >
                {x.display_name}
              </h3>
              </div>
              <div className={style.code}>
              <h3
                // style={{
                //   marginLeft: "15rem",
                //   fontSize: "1.5rem",
                //   backgroundColor: "rgba(107, 80, 151, 0.678)",
                // }}
              >
                Airport Code : {x.code}
              </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 style={{ fontSize: "2rem" }}>
            Happiness is looking down at a new country from your plane window.
          </h2>
        </div>
      )}
    </div>
  );
}
