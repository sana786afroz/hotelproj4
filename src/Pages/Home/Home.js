import React from "react";
import style from "./Home.module.css";
import LeftSec from "../../Components/Section/LeftSec/LeftSec";
import MiddleSec from "../../Components/Section/MiddleSec/MiddleSec";
import Navbar from "../../Components/Navbar/Navbar";
export default function Home() {

  return (
    <>
      <Navbar />
      <div className={style.main}>
       </div>
      <LeftSec />
      <MiddleSec />
    </>
  );
}
