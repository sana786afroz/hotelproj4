import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Hotel from "./Pages/Hotel/Hotel";
import Airport from "./Pages/Airport/Airport";
import Restaurant from "./Pages/Resturant/Restaurant";
import PlanActivity from "./Pages/PlanActivity/PlanActivity";
import Search from "./Pages/Search/Search";
import Services from "./Pages/Services/Services";
import { RecoilRoot } from "recoil";
import Login from "./Conform/Login/Login";
import Register from "./Conform/Register/Register";
import SelectedHotel from "./Pages/SelectedHotel/SelectedHotel";
import HotelBooking from "./Pages/HotelBooking/HotelBooking";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/home" element={<App />}/>
        <Route path="/hotel" element={<Hotel/>} />
        <Route path="/airport" element={<Airport/>} />
        <Route path="/restaurant" element={<Restaurant/>} />
        <Route path="/PlanActivity" element={<PlanActivity/>} />
        <Route path="/Search" element={<Search/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/SelectedHotel" element={<SelectedHotel/>} />
        <Route path="/HotelBooking" element={<HotelBooking/>} />
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
