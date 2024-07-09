import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "f55d396ae54o7a80b1e5dfc1t9302b80";
  let city = props.city;
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;
  Axios.get(apiUrl).then(handleResponse);

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
