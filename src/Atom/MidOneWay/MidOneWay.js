import React, { useState } from "react";
import { SearchAll ,} from "../../Recoil/RecoilData";
import { useSetRecoilState } from "recoil";
import style from "./MidOneWay.module.css";
export default function MidOneWay({ setList }) {
  const [isData, setIsData] = useState("");
const setAllPlaces=useSetRecoilState(SearchAll)
  function handleChange(e) {
    setIsData(e.target.value);
  }

  async function handleSearch(isData) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "43e138d2a8mshdd5783f8629f9afp105103jsnfac1b0bd9c7a",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    fetch(
      `https://travel-advisor.p.rapidapi.com/locations/search?query=${isData.toLowerCase()}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`,
      options
    )
      .then((response) => response.json())
      .then((response) =>setAllPlaces(response.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className={style.home}>
     
      <input
        className={style.input1}
        placeholder="Search"
        onChange={handleChange}
        value={isData}
      />
      <button className={style.btn} onClick={() => handleSearch(isData)}>
        Search
      </button>
   
    </div>
  );
}
