import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import style from "./Hotel.module.css";
import { chooosedHotel } from "../../Recoil/RecoilData";
import { useSetRecoilState } from "recoil";
import { RotatingLines } from  'react-loader-spinner'
export default function Hotel() {
  const setchoosehotel = useSetRecoilState(chooosedHotel);
  const nav = useNavigate();
  function handleClick() {
    nav("/home");
  }
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const[loading,setLoading]=useState(false)
  const[dynamic,setDynamic]=useState(false)

  function handleChange(e) {
    
    setSearch(e.target.value);

  }
  async function handleSearch(search) {
    setLoading(true)
    setDynamic(true)
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
      .then((response) =>{
        setList(response.data.filter((x) => x.result_type === "lodging"))
        setLoading(false)
        setDynamic(false)
      }
      )
      .catch((err) => console.log(err));
  }
  function handleSelectedHotel(x) {
   
    setchoosehotel(x);
    nav("/SelectedHotel");
  }
  return (
    <div className={style.main} id={list.length === 0 ? style.bg : style.bgc}>
      <h2
        style={{
          fontSize: "5rem",
          marginTop: "1rem",
          color: "rgba(216, 143, 7, 0.979)",
        }}
      >
        <i>Search Your Favourite Hotel</i>
      </h2>

      <input
        className={style.input1}
        placeholder="search"
        onChange={handleChange}
        value={search}
      />
      <button style={{backgroundColor:dynamic?"grey":""}} className={style.btn} onClick={() => handleSearch(search)} disabled={dynamic}>
        Search
      </button>
      <button className={style.btn} onClick={handleClick}>
        Home
      </button>
      {!loading ?

    
        <div className={style.maincard}>
            
          {list.map((x, index) => (
            
            <div
              key={index}
              onClick={() => handleSelectedHotel(x)}
              className={style.card}
            >
             
             
              <div className={style.img}>
                <img
                  className={style.midimg}
                  src={x?.result_object.photo?.images?.large?.url}
                  alt="pics"
                />
              </div>

              <br />
              <div className={style.address}>
                <h3>{x?.result_object.address}</h3>
              </div>
              

            </div>
          ))}
        </div>:
        <div className={style.loader}>
          <RotatingLines
  strokeColor="yellow"
  strokeWidth="5"
  animationDuration="0.75"
  width="150"
  visible={true}
/>
</div>
}
       
        {/* // <div>
        //   <h2 style={{ color: "rgba(216, 143, 7, 0.979)" }}>
        //     {" "}
        //     <i>Life is what happens when you're busy making other plans.</i>
       
        //   </h2>
        // </div> */}
      
    </div>
  );
}
