import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <div className="clearfix d-flex">
            <div className="float-left">
              <WeatherIcon code={props.information.icon} />
            </div>
            <div className="float-left"></div>
            <WeatherTemperature celsius={props.information.temperature} />
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
