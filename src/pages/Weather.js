import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import search_icon from "../assets/search_icon.png";
import location from "../assets/location.png";
import { WeatherAction } from "../redux/action/Action";
import weatherReducer from "../redux/reducer/WeatherReducer";
import Date from "../assets/Date.png";
import styles from "./weather.module.css";
import { Formik } from "formik";
export default function Weather() {
  const [city, setCity] = useState("");
  const weatherList = useSelector(
    (state) => state?.weatherReducer?.weatherList
  );

  console.log(  "🚀 ~ file: Weather.js:12 ~ Weather ~  weatherList:",weatherList);

  const loading = useSelector((state) => state?.weatherReducer?.loading);

    
  const celsiuc = (temp) => {
    return Math.round(temp - 273.15);
  };

  // const forhenfiet=(temp)=>{
  //  return (temp - weatherList?.list[0]?.main?.temp) * 9/5 + 32
  // }

  const dispatch = useDispatch();

  
  

  return (
    <div className={styles.Weather}>
      
      <div className="container">
        <div className="row ">
          <div className="col-md-3 "></div>
          <div className="col-md-6 mt-5 ">
            <div className={styles.card}>
              <input
                className={styles.input}
                type="text"
                name="name"
                id="name"
                placeholder=" Enter name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <button
                className=" btn btn-light ms-2"
                style={{
                  borderRadius: "0.75rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                onClick={() => dispatch(WeatherAction(city))}
              >
                <img src={search_icon} alt="" />
              </button>
            </div>
          </div>

          <div className="col-md-3"></div>
        </div>
        {!weatherList ? (
          <h1 className=" text-center p-2" >Search city and press</h1>
        ) : loading ? (
          <h1 className="text-center">loading...</h1>
        ) : weatherList.message ? (
          <h1 className="text-center p-2 ">{weatherList.message}</h1>
        ) : (
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 pt-5">
              <div className={styles.cardset}>
                <div className="card-header ">
                  <h3 className="  text-white">
                    City name : {weatherList?.data?.city.name}
                  </h3>
                </div>
                <div class="card-body">
                  <h6 className=" pt-4 text-white">
                    {weatherList?.data?.city.name},
                    {weatherList?.data?.city.country}
                  </h6>
                  <h6 className=" pt-2 text-white">
                    {weatherList?.data?.list[0]?.dt_txt}
                  </h6>
                  <h1 className="text-white pt-5 ">
                    {" "}
                    Temp : {celsiuc(weatherList?.data?.list[0]?.main?.temp)}
                    &deg;C
                  </h1>

                  <h4 className="pt-5 text-white">
                    Cloudly : {weatherList?.data?.list[0]?.clouds.all}
                  </h4>
                  <h6 className="text-white pt-3 ">
                    <img src={location} alt="" /> Humidity :{" "}
                    {weatherList?.data?.list[0]?.main?.humidity}
                  </h6>
                  <h6 className="text-white  ">
                    {" "}
                    <img src={Date} alt="" /> precipication : none
                  </h6>
                  <h6 className="text-white  ">
                    Wind speed : {weatherList?.data?.list[0]?.wind?.speed} km/h
                  </h6>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

// <div className={styles.cardset}>
{
  /* <div className="card-header ">
  <h3 className="text-center text-white">Your Lacation</h3>
</div>
<div class="card-body">
  <h6 className=" pt-4 text-white"> Lahore , Pakistan </h6>
  <h6 className=" pt-2 text-white"> DateTine | Monday </h6>
  <h1 className="text-white pt-5 ">25&deg;C | 73&deg;F</h1>

  <h4 className="pt-5 text-white">Cloudly</h4>
  <h6 className="text-white pt-3 ">
    <img src={location} alt="" /> Humidity : 60%
  </h6>
  <h6 className="text-white  ">
    {" "}
    <img src={Date} alt="" /> precipication : 4%
  </h6>
  <h6 className="text-white  ">Wind speed : 6.2 km/h</h6>
</div> */
}
// </div>
