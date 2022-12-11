import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            {" "}
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Kyiv</h1>
      <ul>
        <li>Friday 12:00</li>
        <li>Light rain</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="Light Rain"
          ></img>
          <span className="temperature">1</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          {" "}
          <ul>
            <li>Precipitation: 15% </li>
            <li>Humidity: 98%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
