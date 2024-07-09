import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <WeatherIcon code="clear-sky-day" size={40} />
          <div className="forecastTemperature">
            <span className="forecastMax">19º</span>
            <span className="forecastMin">10º</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
