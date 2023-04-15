import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-day": "CLOUDY",
    "broken-clouds-day": "CLOUDY",
    "shower-rain-day": "SLEET",
    "rain-day": "RAIN",
    "thunderstorm-day": "WIND",
    "snow-day": "SNOW",
    "mist-day": "FOG",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-night": "SLEET",
    "rain-night": "RAIN",
    "thunderstorm-night": "WIND",
    "snow-night": "SNOW",
    "mist-night": "FOG",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#F4887E"
      size={props.size}
      animated={true}
    />
  );
}
