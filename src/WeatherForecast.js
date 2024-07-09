import React, { useState } from "react";

import "./WeatherForecast.css";
import Axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f55d396ae54o7a80b1e5dfc1t9302b80";
    let city = props.city;
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;
    Axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
