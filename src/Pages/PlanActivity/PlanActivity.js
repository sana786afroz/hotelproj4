import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./PlanActivity.module.css";
export default function PlanActivity() {
  const toHome=useNavigate()
  function handleClick(){
toHome("/home")
  }
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
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
        setList(response.data.filter((x) => x.result_type === "activities"))
      )
      .catch((err) => console.error(err));
  }

  return (
    <>
      <div className={style.main} id={list.length === 0 ? style.bg : ""}>
        <h3
          style={{
            fontSize: "5rem",
            marginTop: "1rem",
            color: "rgba(145, 231, 47, 0.986)",
            font: "italic",
          }}
        >
          Activities To do in your destination place{" "}
        </h3>
        <input
          className={style.input1}
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={style.btn} onClick={() => handleSearch(search)}>
          Click
        </button>
        <button className={style.btn} onClick={handleClick}>Home</button>
      </div>
      {search ? (
        <div className={style.maincard}>
          {list.map((x) => (
            <div className={style.card}>
              <img
                className={style.midimg}
                width="200px"
                src={x?.result_object.photo?.images?.large?.url}
                alt="pictures"
              />
              <div className={style.content}>
              <h3>
                Place Name : {x.result_object.name}
              </h3>
              <h3 >
                Company Name : {x.result_object.supplier_location_name}
              </h3>
              <h3 >
                Reviews : {x.review_snippet?.snippet}
              </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={style.lowerdiv}>
          <h3>
            <i>
              “It’s a magical world, Hobbes, ol’ buddy… Let’s go exploring!”
            </i>
          </h3>
        </div>
      )}
    </>
  );
}
