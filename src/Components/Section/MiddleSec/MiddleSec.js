import React, { useState } from "react";
import MidOneWay from "../../../Atom/MidOneWay/MidOneWay";
import style from "./MiddleSec.module.css";
import { MdFacebook } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Footer from "../../../Atom/Footer/Footer";
import { SearchAll } from "../../../Recoil/RecoilData";
import { useRecoilValue } from "recoil";

import { useNavigate } from "react-router-dom";
export default function MiddleSec() {
  const [list, setList] = useState([]);
  const data = useRecoilValue(SearchAll);
  const navto = useNavigate();
  function handleClick() {
    navto("/Search");
  }
  return (
    <div className={style.parent}>
      <h1 className={style.attractive}>Search Attractive Places</h1>

      <div className={style.midiv}>
        <MidOneWay setList={setList} />
      </div>

      <div className={style.pop}>
        {data.slice(0, 3).map((x,index) => (
          <div key={index} className={style.middlediv}>
            <img
              width="120px"
              height="120px"
              className={style.midimg}
              src={x?.result_object.photo?.images?.large?.url}
              alt="pics"
            />
            <span>{x?.result_object.photo?.caption}</span>
            <br />
            <p>{x.result_object.address}</p>
          </div>
        ))}
      </div>
      {data.length > 0 ? (
        <button className={style.btn} onClick={handleClick}>
          Show More
        </button>
      ) : (
        ""
      )}

      <div className={style.secondiv}>
        <div className={style.div4}>
          <img
            className={style.img4}
            src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_235,h_122,dpr_2/offermgmt/images/BBD/ICICCC_ICICIDC_BSB_FLIGHTS_17022023.png"
            alt="flight"
          />
        </div>
        <div className={style.div5}>
          <img
            className={style.img5}
            src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_235,h_122,dpr_2/offermgmt/images/BBD/CTCITI_CTEMI_BSB_FLIGHTS_12012023.png"
            alt="flight"
          />
        </div>
        <div className={style.div6}>
          <img
            className={style.img6}
            src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_235,h_122,dpr_2/offermgmt/images/BBD/AUDC_BTS_BSB_FLIGHTS_23022023.png"
            alt="flight"
          />
        </div>
      </div>

      <div className={style.footer}>
        <div className={style.footer1}>
          <p>
            <a href="aboutUs">About Us</a>
          </p>
          <p>
            <a href="careers">Careers</a>
          </p>
          <p>
            <a href="faqs">FAQs</a>
          </p>
          <p>
            <a href="support">Support</a>
          </p>
          <p>
            <a href="collection">Collection</a>
          </p>
          <p>
            <a href="business">Cleartrip for Business</a>
          </p>
          <p>
            <a href="gift">Gift Cards</a>
          </p>
        </div>

        <div className={style.divltd}>
          <p>&copy; 2023 Cleartrip Pvt.Ltd </p>
          <span style={{ display: "flex", gap: "2rem" }}>
            <p style={{ color: "grey" }}>
              <a href="privacy">.Pivacy</a>
            </p>
            <p>
              <a href="privacy">.Security</a>
            </p>
            <p>
              <a href="privacy">.Term of Use</a>
            </p>
          </span>
          <span>
            Connect{" "}
            <a href="https://www.facebook.com/" target="blank">
              <MdFacebook style={{ fontSize: "small" }} />{" "}
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <BsInstagram style={{ fontSize: "small" }} />{" "}
            </a>
            <a href="https://twitter.com/" target="blank">
              <GrTwitter style={{ fontSize: "small" }} />
            </a>
            <a href="https://www.linkedin.com/" target="blank">
              <TiSocialLinkedinCircular style={{ fontSize: "medium" }} />{" "}
            </a>
          </span>
        </div>
        <p style={{ marginLeft: "1rem" }}> Other Tools</p>
        <div className={style.footer2}>
          <p>
            <a href="cheap">Cheap air tickets </a>
          </p>
          <p>
            <a href="flyticket">Flight tickets</a>
          </p>
          <p>
            <a href="hotel">India Hotels</a>
          </p>
          <p>
            <a href="domesticair">Cheap Domestic Air Tickets</a>
          </p>
          <p>
            <a href="domesticfly">Domestic Flights</a>
          </p>
          <p>
            <a href="domairlines">Domestic Airlines in India</a>
          </p>
          <p>
            <a href="inter">International Air Tickets</a>
          </p>
          <p>
            <a href="interfly">International Flights</a>
          </p>
          <p>
            <a href="interair">International Airlines</a>
          </p>
        </div>
        <p style={{ fontSize: "smaller", marginLeft: "1rem" }}>
          <a href="packages">Holiday Packages</a>
        </p>
        <Footer />
      </div>
    </div>
  );
}
