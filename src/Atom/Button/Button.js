import React from "react";
// import "./Buttons.module.css";
function Button({ Sign,logo,  className,image,btnNext}) {
  return (
    <>
      <button className={className} onClick={btnNext}>
       {image}&nbsp;&nbsp;&nbsp;{Sign}&nbsp;&nbsp;&nbsp;{logo} 
      </button>
    </>
  );
}
export default Button;
