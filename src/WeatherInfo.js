import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <h1>{props.information.city}</h1>
      <ul>
        <li className="mt-2">
          <FormattedDate date={props.information.date} />
        </li>
        <li className="text-capitalize">{props.information.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.information.icon} />
            <span className="temperature">
              {Math.round(props.information.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.information.humidity} %</li>
            <li>Wind: {Math.round(props.information.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
