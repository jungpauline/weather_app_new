import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast.js";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false }); //empty object that will store all the objects, to avoid using an object for every datapointconst [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(props.defaultCity);
  const getGeolocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getCurrentWeather(latitude, longitude);
      getCurrentForecast(latitude, longitude);
    });
  };

  function getCurrentWeather(lat, lon) {
    let key = "646809et7a8c3ba7374obd5ce9af7bc0";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${key}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function showCurrentForecast(response) {
    console.log(response);
  }

  function getCurrentForecast(lat, lon) {
    let key = "646809et7a8c3ba7374obd5ce9af7bc0";

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${key}&units=metric`;

    axios.get(apiUrl).then(showCurrentForecast);
  }

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      feelsLike: response.data.temperature.feels_like,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "420837090555f231450d0bd2abtbeaao";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row search-form">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control border-0"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-1">
              <button type="submit" className="btn btn-light w-10">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "#004968" }}
                />
              </button>
            </div>
            <div className="col-1">
              <button
                className="btn btn-light w-10"
                title="Geolocation"
                onClick={getGeolocation}
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#004968" }}
                />
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
