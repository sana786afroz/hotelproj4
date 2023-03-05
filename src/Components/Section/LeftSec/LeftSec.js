import React from "react";
import Button from "../../../Atom/Button/Button";
import { arrs } from "../../../const";
import style from "../../Section/LeftSec/LeftSec.module.css";

export default function LeftSec() {
  return (
    <>
      <div className={style.wrapper}>
        {arrs.map((arr, index) => {
          return (
            <div key={index}>
              <Button
                className={style.icons}
                image={arr.icon}
                Sign={arr.text}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
